import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import UserTage from "../../UseTags";
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
`;
const Tag = ()=> {
    const {tags,setTags} = UserTage()
    console.log(setTags);
    return(
        <Layout>
            <Container>
                {tags}
            </Container>
            <NavBar/>
        </Layout>
    )
}

export default Tag