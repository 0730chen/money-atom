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

const TypeSection:React.FC= ()=>{
    const categoryMap = {
        '-':'支出',
        '+':'收入'
    }
    type Keys = keyof typeof categoryMap
    const [categoryList] =  useState<Keys[]>(['-','+'])
    const [Category,setCategory] = useState('-') //-表示支出，+表示收入
    return (
        <Wrapper>
            {categoryList.map(item=>{
                return  <button className={Category === item ? 'selected':''} key={item} onClick={()=>{setCategory(item)}}>{categoryMap[item]}</button>
            })}
        </Wrapper>
    )
}

export {TypeSection}