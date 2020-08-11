import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import {TypeSection} from "../Home/components/TypeSection";
import {useRecord} from "../../hooks/useRecord";
import UserTags from "../../UseTags";
const Container = styled.div`
flex: 1;

`
const Statistics =()=> {
    const categoryMap = {
        '-':'支出',
        '+':'收入'
    }
    const {records} = useRecord()
    const {getName} = UserTags()
    console.log(records);
    type Keys = keyof typeof categoryMap
    const [category,setCategory] =  useState<Keys>('-')
    return (<Layout>
        <Container>
            <TypeSection value={category} onChange={value=>setCategory(value)
            }/>
            <div>
                {records.map(r=>{
                    return  (<div key={r.amount}>
                        {r.tags.map(e=>{
                            return (<span key={e}>{getName(e)}</span>)
                        })}
                        <hr/>
                        {r.amount}
                    </div>)
                })}
            </div>
        </Container>
        <NavBar/>
    </Layout>)
}

export default Statistics