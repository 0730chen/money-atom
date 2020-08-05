import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import UserTags from "../../UseTags";
import Icon from "../../components/Icon/Icon";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import Space from "../../common/style/Space";
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
    const {tags,setTags,onAddTag} = UserTags()
    console.log(setTags);
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
                    <Button onClick={onAddTag}>新增标签</Button>
                </Center>
            </Container>
            <NavBar/>
        </Layout>
    )
}

export default Tag