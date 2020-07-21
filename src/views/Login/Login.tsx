import styled from "styled-components";
import React, {useState} from "react";
import Icon from "../../components/Icon/Icon";
import { useHistory } from "react-router-dom";
const Container = styled.div`
display: flex;
flex-direction: column;
background: url('image/bg2.jpg');
background-size: 100vw 100vh;
width: 100%;
justify-content: center;
align-items: center;
height: 100%;
`
const Input = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
>input{
width: 100%;
padding: 8px 24px;
margin: 12px 0;
}
>.icon{
position: absolute;
left: 0;
top: 16px;
}
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
text-align: center;
color: white;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 16px;
`

const Login =()=>{
    let history = useHistory()
    const onLogin = ()=>{
        console.log(name,password);
        history.push('/money')
    }
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    return (
        <Container>
            <Title>欢迎登陆便利记账</Title>
            <Form>
                <Input>
                    <Icon name='account'/>
                    <input placeholder='请输入账号' type='text' value={name} onChange={e=>{setName(e.target.value)}}/>
                    {/*<input type="text" placeholder="在这里输入备注" value={Notes} onChange={e=>{setNotes(e.target.value)}}/>*/}
                </Input>
                <Input>
                    <Icon name='password'/>
                    <input placeholder='请输入密码' type='text' value={password} onChange={e=>{setPassword(e.target.value)}}/>
                </Input>
                <Button onClick={()=>{onLogin()}}>登陆</Button>
            </Form>
        </Container>
    )
}

export default  Login