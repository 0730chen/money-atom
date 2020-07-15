
import React, {useState} from "react";
import Wrapper from "./NumberSection/Wrapper";

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