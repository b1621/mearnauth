import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next)=>{
    let token ;
    token = req.cookies.jwt;  // passed because of cookie-parser middleware
    if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            next()
        }catch(error){
           res.status(401) 
        throw new Error('Not authorized, invalid token')

        }
    }else{
        res.status(401)
        throw new Error('Not authorized, not token')
    }
})

export {protect} 