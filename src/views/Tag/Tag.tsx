import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
`;
const Tag = ()=>(
    <Layout>
        <Container>标签页</Container>
        <NavBar/>
    </Layout>
);

export default Tag