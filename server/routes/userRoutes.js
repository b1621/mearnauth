import express from "express";
import { authUser,registerUser,logoutUser,getUserProfile,updateUserProfile } from "../controllers/userController.js";
const router = express.Router();

// router.get('/auth',authUser)
router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router;