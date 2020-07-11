import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import {TagsSections} from "./components/TagsSections";
import {NotesSection} from "./components/NotesSection";
import {TypeSection} from "./components/TypeSection";
import {NumberPad} from "./components/NumberPad";
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
  display: flex;
  flex-direction: column;
`;
// @ts-ignore
const Home = ()=>(
        <Layout>
            <Container>
                <TagsSections>
                </TagsSections>
                <NotesSection>
                </NotesSection>
                <TypeSection>
                </TypeSection>
                <NumberPad>
                </NumberPad>
            </Container>
            <NavBar/>
        </Layout>
    );

export default  Home