import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
    children:any
}
const Layout = (props:Props)=>{
    return (
        <Container>
            {props.children}
        </Container>
    )
};
export  default Layout