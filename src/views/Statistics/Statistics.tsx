import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import {TypeSection} from "../Home/components/TypeSection";
import {useRecord} from "../../hooks/useRecord";
import UserTags from "../../UseTags";
const Container = styled.div`
background: #ffd6a2;
flex: 1;
`
const Item = styled.div`
 display: flex;
 justify-content: space-between;
 background: white;
 font-size: 18px;
 line-height: 20px;
 padding: 10px 16px;
  >.note{
  margin-right: auto;
  margin-left: 16px;
  }
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
                    return  (<Item key={r.amount}>
                        {r.tags.map(e=>{
                            return (<span className="note" key={e}>{getName(e)}</span>)
                        })}
                        <div className="amount">￥{r.amount}</div>
                    </Item>)
                })}
            </div>
        </Container>
        <NavBar/>
    </Layout>)
}

export default Statistics