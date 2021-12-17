import React from 'react';
import Navbar from '../components/Navbar';

import { Container, Wrapper, Form, Title, Input, Agreement, Button, Em } from '../components/styles/AuthStyle';

const Login = () => {
    const handleSubmit = (e) => {
     e.preventDefault();
    }
    return (
        <Container>
            <Navbar simple/>
            <Wrapper>
                
                <Form>
                    <Title>SIGN IN</Title>
                 <Input placeholder='username'/>
                 <Input type="password" placeholder='password'/>
                 <Agreement>By signing up you agree to our terms and <Em>privacy</Em> policies</Agreement>
                 <Button onClick={handleSubmit}>SIGN IN</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
