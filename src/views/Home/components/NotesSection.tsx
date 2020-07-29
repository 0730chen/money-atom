import styled from "styled-components";
import React from "react";
import Input from "../../../components/Input/Input";

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

type Pros = {
    value:string,
    onChange:(value:string)=>void
}
const NotesSection:React.FC<Pros> = (props:Pros)=>{
    const note = props.value
    // const inputRef = useRef<HTMLInputElement>(null)
    const onChange= (e: { target: { value: string; }; })=>{
        props.onChange(e.target.value)
    }
    return (
        <_NotesSection>
            {/*<label>*/}
            {/*    <span>备注</span>*/}
            {/*    /!*<input type="text" placeholder="在这里输入备注" value={Notes} onChange={e=>{setNotes(e.target.value)}}/>*!/*/}
            {/*    <input type="text"  placeholder="在这里输入备注" defaultValue={note} onMouseDown={x} ref={inputRef}/>*/}
            {/*</label>*/}
            <Input label='备注' type='text' defaultValue={note} placeholder='请输入备注' onChange={onChange}/>
        </_NotesSection>
    )
}
export {NotesSection}