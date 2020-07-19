import styled from "styled-components";
import React from "react";

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
height: 100%;
`
const Input = styled.input`
padding: 16px;
`
const Title = styled.div`
font-size: 18px;
font-weight: 800;
color: #ff6600;
`
const Button  =styled.button`
font-size: 18px;
border:none;
padding:8px 12px;
border-radius: 4px;
width: 50%;
background: #ff6600;
color: white;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
padding: 16px;
`

const Login =()=>{
    return (
        <Container>
            <Title>欢迎登陆便利记账</Title>
            <Form>
                <Input placeholder='请输入账号'/>
                <Input placeholder='请输入密码'/>
                <Button>登陆</Button>
            </Form>
        </Container>
    )
}

export default  Login