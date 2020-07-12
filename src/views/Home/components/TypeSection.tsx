import styled from "styled-components";
import React from "react";

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
  &>.select::after{
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
    return (
        <Wrapper>
            <button className="select">收入</button>
            <button>支出</button>
        </Wrapper>
    )
}

export {TypeSection}