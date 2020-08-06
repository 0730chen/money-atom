import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import {TagsSections} from "./components/TagsSections";
import {NotesSection} from "./components/NotesSection";
import {TypeSection} from "./components/TypeSection";
import {NumberPad} from "./components/NumberPad";
import {useRecord} from "../../hooks/useRecord";
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
  display: flex;
  flex-direction: column;
`;

type Category = '-'|'+'
const Home = ()=> {
    const [obj, setObj] = useState({
        tags: [] as number[],
        note:'',
        category:'-' as Category,
        amount:0
    })
    type Selected = typeof obj
    const {records,addRecord} = useRecord()
    const onChange = (value:Partial<Selected>)=>{
        setObj({...obj,...value})

    }
    const submit = ()=>{
        addRecord(obj)
        console.log(records);
        if(addRecord(obj)) {
            alert('提交成功')
            setObj({
                tags: [] as number[],
                note: '',
                category: '-' as Category,
                amount: 0
            })
        }

    }
    return (
        <Layout>
            <Container>
                <TagsSections selected={obj.tags} onChange={tags=>onChange({tags})}/>
                <NotesSection value={obj.note} onChange={(note)=>onChange({note})}/>
                <TypeSection value={obj.category} onChange={(category)=>onChange({category})
               }/>
                <NumberPad value={obj.amount}  onOk={submit} onChange={(amount)=>{onChange({amount})
                }}/>
            </Container>
            <NavBar/>
        </Layout>
    )
}

export default  Home