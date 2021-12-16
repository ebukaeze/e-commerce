import React from 'react';
import Navbar from '../components/Navbar';

import { Container, Wrapper, Title, Form, Input, Button, Agreement, Em } from '../components/styles/AuthStyle';

const Register = () => {

    const handleSubmit = (e) => {
     e.preventDefault();
    }
    return (
        <Container>
            <Navbar simple/>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                 <Input placeholder='first name'/>
                 <Input placeholder='last name'/>
                 <Input placeholder='username'/>
                 <Input type={"email"} placeholder='email'/>
                 <Input type="password" placeholder='password'/>
                 <Agreement>By signing up you agree to our terms and <Em>privacy</Em> policies</Agreement>
                 <Button onClick={handleSubmit}>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
