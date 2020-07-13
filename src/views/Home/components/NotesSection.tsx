import styled from "styled-components";
import React, {useRef, useState} from "react";

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
/*
@params 受控组件 value和setValue由自己控制,
@params 非受控组件，值和value由外部控制
* */
const NotesSection:React.FC = ()=>{
    const [Notes,setNotes] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const x = ()=>{
        if(inputRef.current !==null){
            setNotes(inputRef.current.value)
        }
    }
    return (
        <_NotesSection>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里输入备注" value={Notes} onChange={e=>{setNotes(e.target.value)}}/>
                <input type="text"  placeholder="在这里输入备注" defaultValue={Notes} onMouseDown={x} ref={inputRef}/>
            </label>
        </_NotesSection>
    )
}
export {NotesSection}