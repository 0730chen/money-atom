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
    type Selected = typeof obj
    const onChange = (value:Partial<Selected>)=>{
        setObj({...obj,...value})

    }
    return (
        <Layout>
            <Container>
                <TagsSections selected={obj.tags} onChange={tags=>onChange({tags})}/>
                <NotesSection value={obj.note} onChange={(note)=>onChange({note})}/>
                <TypeSection value={obj.category} onChange={(category)=>onChange({category})
               }/>
                <NumberPad value={obj.amount}  onOk={()=>{}} onChange={(amount)=>{onChange({amount})
                }}/>
            </Container>
            <NavBar/>
        </Layout>
    )
}

export default  Home