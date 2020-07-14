import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  >.out-put{
  background: white;
   font-size: 36px;
    line-height: 72px;
   text-align: right;
   padding: 0 16px;
   box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
               inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  >.number-pad{
    background: white;
    >button{
    font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      text-align: center;
      border: none;
        &.ok{
           height: 128px;
          float: right;
        }
        &.dot{
            width: 50%;
        }
       &:nth-child(1){
        background: rgb(234,214,241)
     }
    &:nth-child(2),&:nth-child(5){
        background: rgb(223,220,241)
    }
    &:nth-child(3),&:nth-child(6),&:nth-child(9){
      background: rgb(214,219,238)
    }
    &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
      background: rgba(205,223,238);
    }
    &:nth-child(8),&:nth-child(11){
      background: rgba(196,229,238);
    }
    &:nth-child(12){
    background: rgba(187,230,236);
    }
    &:nth-child(14){
      background: rgba(179,236,238);
    }
  }
  }
`

const NumberPad:React.FC = ()=>{
    const[output,setOutput] = useState('0')
    const _setOutput  = (output:string)=>{
        if(output.length>16){
            output.slice(0,16)
        }else if(output.length===0){
            output = '0'
        }
        setOutput(output)
    }
    const onClickNumber = (e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent
        if(text === null){
            return
        }
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(output ==='0'){
                    _setOutput(text)
                }else {
                    _setOutput(output+text)
                }
                break;
            case '.':
                if(output.indexOf('.')>0){return}
                _setOutput(output+'.')
                break;
            case '删除':
                if(output.length===1){
                    _setOutput('0')
                }else {
                    _setOutput(output.slice(0,-1))
                }
                break;
            case '清空':
                _setOutput('0')
                break;
        }
    }
    return (
       <Wrapper>
           <div className="out-put">
               {output}
           </div>
           <div className="number-pad clear-fix" onClick={onClickNumber}>
               <button>1</button>
               <button>2</button>
               <button>3</button>
               <button>删除</button>
               <button>4</button>
               <button>5</button>
               <button>6</button>
               <button>清空</button>
               <button>7</button>
               <button>8</button>
               <button>9</button>
               <button className="ok">ok</button>
               <button>0</button>
               <button className="dot">.</button>
           </div>
       </Wrapper>
    )
}

export {NumberPad}