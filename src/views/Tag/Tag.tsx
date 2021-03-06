import React, {ChangeEvent, useState} from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import UserTags from "../../UseTags";
import Icon from "../../components/Icon/Icon";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Space from "../../common/style/Space";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
`;
const Taglist = styled.ol`
   font-size:16px;
   background: #ffd6a2;
   >li{
   border-bottom: 2px solid #e5e5e5;
   line-height: 20px;
   margin-left:16px ;
   >a{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 12px 16px 12px 0;
   }
   }
`
const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Tag = ()=> {
    const {tags,open,dialogOpen,dialogClose} = UserTags()
    const [fullWidth, setFullWidth] = React.useState(true);
    const [tagName,setTagName] = React.useState('')
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleChange = (event:ChangeEvent<HTMLInputElement>):void => {
        console.log(1111)
        console.log(event.currentTarget.value);
        setTagName(event.currentTarget.value);
    };
    const submitTag = ()=> {
        dialogClose(tagName)
    }

    return(
        <Layout>
            <Container>
                <Taglist>
                {tags.map(e=>{
                    return<li key={e.id}>
                        <Link to={'/tag/'+e.id}>
                        <span className='oneLine' >{e.name}</span>
                        <Icon name='right'/>
                        </Link>
                    </li>
                })}
                </Taglist>
                <Center>
                    <Space/>
                    <Space/>
                    <Button onClick={dialogOpen} variant="contained" color="primary">新增标签</Button>
                </Center>
            </Container>
            <NavBar/>
            <Dialog open={open} onClose={dialogClose} aria-labelledby="form-dialog-title" fullWidth={fullWidth}
                    maxWidth='xs'>
                <DialogTitle id="form-dialog-title">添加一个标签</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="标签名"
                        type="text"
                        fullWidth
                        value={tagName}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={dialogClose} color="primary">
                        取 消
                    </Button>
                    <Button onClick={()=>submitTag()} color="primary">
                        确 定
                    </Button>
                </DialogActions>
            </Dialog>
        </Layout>
    )
}

export default Tag