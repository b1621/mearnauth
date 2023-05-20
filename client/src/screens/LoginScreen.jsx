import { useState } from "react";
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import FormContainer from "../components/FormContainer.jsx";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async (e) =>{
        e.preventDefault;
        console.log('submit');
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="email">
                <Form.Lable>Email Address</Form.Lable>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="password">
                <Form.Lable>Enter Password </Form.Lable>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            </Form.Group>
        </Form>
        <Button type="submit" variant="primary" className="mt-3">
            Sign In
        </Button>
        <Row className="py-3">
            <Col>
            New Customer ? <Link to='/register'>Register</Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen