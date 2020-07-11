import styled from "styled-components";
import React from "react";

const _NotesSection = styled.section`
  font-size: 14px;
  >label{
  padding: 0 8px;
  display: flex;
  align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
    display: inline-block;
    width: 100%;
    height: 72px;
    background: none;
    border: none;
    }
  }
`
const NotesSection:React.FC = ()=>{
    return (
        <_NotesSection>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里输入备注"/>
            </label>
        </_NotesSection>
    )
}
export {NotesSection}