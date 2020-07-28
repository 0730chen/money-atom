import React from "react";
import UserTags from "../../UseTags";
import {useParams} from 'react-router-dom'
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
type Params = {
    id:string
}
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
  display: flex;
  flex-direction: column;
`;
const EditorTags:React.FC = ()=>{
    const {findTag}= UserTags()
    let {id} = useParams<Params>()
    const tag =findTag(parseInt(id))
    return (
            <Layout>
                <Container>
                {tag.name}
                </Container>
                <NavBar/>
            </Layout>
    )
}
export default EditorTags