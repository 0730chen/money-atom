
import React, {EventHandler, useState} from "react"
import { useHistory } from "react-router-dom";
import axios from 'axios'
import  qs from 'qs'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserTags from "../../UseTags";



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
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
type Form = {
    name:string,
    password:string
}



const Login =()=>{

    const classes = useStyles();
    const {initTgas} = UserTags()
    let history = useHistory()
    const onLogin = async ()=>{
        let form = {
            name,
            password,
            tagType:initTgas()
        }
        if(form.name !=='' && form.password !=='') {
            try {
                let result = await axios.post('api/user/createUser', qs.stringify(form))
                console.log(result);
                if (result.data.status === 200) {
                    window.localStorage.setItem('name', result.data.data[0].name)
                    let tags = JSON.stringify(result.data.data[0].tags)
                    window.localStorage.setItem('tags',tags)
                    history.push('/money')
                } else {
                    alert(result.data.error)
                }
            } catch (e) {
                console.log(e);
            }
        }else {
            alert('用户名或密码不能为空')
        }

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