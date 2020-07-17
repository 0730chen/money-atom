import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import UserTage from "../../UseTags";
import Icon from "../../components/Icon/Icon";
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
   padding: 12px 16px 12px 0;
   margin-left:16px ;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   }
`
const Button = styled.button`
font-size: 18px;
border:none;
padding:8px 12px;
border-radius: 4px;
background: #ff6600;
color: white;
margin: auto 0;
`
const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Space = styled.div`
height: 16px;
`
const Tag = ()=> {
    const {tags,setTags} = UserTage()
    console.log(setTags);
    return(
        <Layout>
            <Container>
                <Taglist>
                {tags.map(e=>{
                    return<li className='oneLine' key={e}>{e}<Icon name='right'/></li>
                })}
                </Taglist>
                <Center>
                    <Space/>
                    <Space/>
                <Button>新增标签</Button>
                </Center>
            </Container>
            <NavBar/>
        </Layout>
    )
}

export default Tag