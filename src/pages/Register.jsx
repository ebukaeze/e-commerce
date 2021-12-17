import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

import { Container, Wrapper, Title, Form, Input, Button, Agreement, Em } from '../components/styles/AuthStyle';

const Register = () => {

    const handleSubmit = (e) => {
     e.preventDefault();
    }
    return (
        <Container>
            <Announcement />
            <Navbar simple/>
            <Wrapper>
                
                <Form>
                    <Title>CREATE AN ACCOUNT</Title>
                 <Input placeholder='first name'/>
                 <Input placeholder='last name'/>
                 <Input placeholder='username'/>
                 <Input type={"email"} placeholder='email'/>
                 <Input type="password" placeholder='password'/>
                 <Input type="password" placeholder='confirm password'/>
                 <Button onClick={handleSubmit}>CREATE ACCOUNT</Button>
                 <Agreement>By signing up you agree to our terms and <Em>privacy</Em> policies</Agreement>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
