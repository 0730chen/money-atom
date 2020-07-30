import React from "react";
import UserTags from "../../UseTags";
import {useParams} from 'react-router-dom'
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Space from "../../common/style/Space";
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
const Section = styled.section`
padding-top: 16px;
display: flex;
flex-direction: column;
align-items: center;
>button{
padding: 8px;
}
`
const EditorTags:React.FC = ()=>{
    const {findTag,updateTag,deleteTag}= UserTags()
    let {id} = useParams<Params>();
    const tag =findTag(parseInt(id));
        return (
            <Layout>
                <Container>
                    <Header>
                        <Icon name='left'/>
                        <span>编辑标签</span>
                    </Header>
                    {tag?  <Section>
                        <Input label='标签名' placeholder={'请填写标签名'} defaultValue={tag.name} onChange={(e) => {
                            updateTag(tag.id, {name: e.target.value})
                        }}/>
                        <Space/>
                        <Space/>
                        <Button onClick={() =>deleteTag(tag.id)}>删除标签</Button>
                    </Section>:<div>标签不存在</div>}
                </Container>
                <NavBar/>
            </Layout>
        )
    }
export default EditorTags