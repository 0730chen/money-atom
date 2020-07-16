import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  display: flex;
  font-size: 24px;
  background: #c4c4c4;
  >button{
  width: 50%;
  border:none;
  text-align: center;
  padding: 16px 0;
  position: relative;
  }
  &>.selected::after{
    content: '';
    height: 3px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #aab0ff;
    left:0;
  }
`

type Props ={
    value:'-'|'+',
    onChange:(value:'-'|'+')=>void
}
const TypeSection:React.FC<Props>= (props:Props)=>{
    const categoryMap = {
        '-':'支出',
        '+':'收入'
    }
    const category = props.value
    type Keys = keyof typeof categoryMap
    const [categoryList] =  useState<Keys[]>(['-','+'])
    return (
        <Wrapper>
            {categoryList.map(item=>{
                return  <button className={category === item ? 'selected':''} key={item} onClick={()=>{props.onChange(item)}}>{categoryMap[item]}</button>
            })}
        </Wrapper>
    )
}

export {TypeSection}