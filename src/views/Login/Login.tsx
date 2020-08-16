
import React, { useState} from "react"
import { useHistory } from "react-router-dom";
import axios from 'axios'
import  qs from 'qs'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
// // const Container = styled.div`
// // display: flex;
// // flex-direction: column;
// // width: 100%;
// // justify-content: center;
// // align-items: center;
// // height: 100%;
// // `
// const Input = styled.div`
// position: relative;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// width: 100%;
// >input{
// width: 100%;
// padding: 8px 24px;
// margin: 12px 0;
// }
// >.icon{
// position: absolute;
// left: 0;
// top: 16px;
// }
// `
// const Title = styled.div`
// font-size: 18px;
// font-weight: 800;
// color: #ff6600;
// `
// // const Button  =styled.button`
// // font-size: 18px;
// // border:none;
// // padding:8px 12px;
// // border-radius: 4px;
// // width: 50%;
// // background: #ff6600;
// // text-align: center;
// // color: white;
// // `
// const Form = styled.div`
// width: 100%;
// display: flex;
// flex-direction: column;
// align-items: flex-end;
// padding: 16px;
// `
type Form = {
    name:string,
    password:string
}
const Login =()=>{
    const classes = useStyles();

    let history = useHistory()
    const onLogin = ()=>{
        let form = {
            name,
            password
        }
        console.log(form)
        axios.post('api/user/createUser',qs.stringify(form)).then(res=>{
            console.log(res);
            window.localStorage.setItem('id',res.data._id)
            history.push('/money')
        }).catch(error=>{
            console.log(error)
            history.push('/money')
        })
    }
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    欢迎回来橘子记账
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user-name"
                        label="用户名"
                        name="name"
                        autoComplete="email"
                        autoFocus
                        value={name} onChange={e=>{setName(e.target.value)}}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="密码"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password} onChange={e=>{setPassword(e.target.value)}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onLogin}
                    >
                        登 陆
                    </Button>
                </form>
            </div>
        </Container>
    );


}

export default  Login