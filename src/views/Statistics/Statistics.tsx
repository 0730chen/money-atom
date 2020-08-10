import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import {TypeSection} from "../Home/components/TypeSection";
import {useRecord} from "../../hooks/useRecord";
const Container = styled.div`
flex: 1;

`
const Statistics =()=> {
    const categoryMap = {
        '-':'支出',
        '+':'收入'
    }
    const {records} = useRecord()
    type Keys = keyof typeof categoryMap
    const [category,setCategory] =  useState<Keys>('-')
    return (<Layout>
        <Container>
            <TypeSection value={category} onChange={value=>setCategory(value)
            }/>
            <div>
                {JSON.stringify(records)}
            </div>
        </Container>
        <NavBar/>
    </Layout>)
}

export default Statistics