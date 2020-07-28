import React from "react";
import UserTags from "../../UseTags";
import {useParams} from 'react-router-dom'
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
type Params = {
    id:string
}
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
background: white;
padding: 16px 8px;
display: flex;
flex-direction: row;
align-items: center;
>span{
margin: 0 auto;
font-weight: 800;
padding-right: 8px;
}
`
const EditorTags:React.FC = ()=>{
    const {findTag}= UserTags()
    let {id} = useParams<Params>()
    const tag =findTag(parseInt(id))
    return (
            <Layout>
                <Container>
                    <Header>
                        <Icon name='left'/>
                        <span>编辑标签</span>
                    </Header>
                    <div>
                        <label>
                            <span>标签名</span>
                            <input type="text" placeholder="请输入标签名"/>
                        </label>
                    </div>
                    <div>
                        {tag.name}
                    </div>
                    <Button>删除标签</Button>
                </Container>
                <NavBar/>
            </Layout>
    )
}
export default EditorTags