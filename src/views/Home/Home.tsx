import React, {useState} from "react";
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

type Category = '-'|'+'
const Home = ()=> {

    const [obj, setObj] = useState({
        tags: [] as string[],
        note:'',
        category:'-' as Category,
        amount:0
    })

    return (
        <Layout>
            <Container>
                <TagsSections selected={obj.tags} onChange={(tags)=>setObj({
                    ...obj,
                    tags:tags
                })}/>
                <NotesSection value={obj.note} onChange={(value)=>setObj(({
                    ...obj,
                    note: value
                }))}/>
                <TypeSection value={obj.category} onChange={(value)=>{
                    setObj({
                        ...obj,
                        category: value
                    })
                }}/>
                <NumberPad value={obj.amount} onChange={(value)=>{
                    setObj({
                        ...obj,
                        amount: value
                    })
                }}/>
            </Container>
            <NavBar/>
        </Layout>
    )
}

export default  Home