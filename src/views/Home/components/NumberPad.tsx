
import React from "react";
import Wrapper from "./NumberSection/Wrapper";
import SetOutPut from "./NumberSection/SetOutPut";

type Props = {
    value:number,
    onChange:(value:number)=>void
}
const NumberPad:React.FC<Props> = (props:Props)=>{
    const output = props.value.toString()
    const _setOutput  = (output:string)=>{
        let value
        if(output.length>16){
            value  = parseFloat(output.slice(0,16))
        }else if(output.length===0){
            value = 0
        }else {
            //TODO输入小数点不会同步
            value = parseFloat(output)
            console.log(value)
        }
        props.onChange(value)
    }
    const onClickNumber = (e:React.MouseEvent)=>{

        const text = (e.target as HTMLButtonElement).textContent
        if(text === null){
            return
        }
        if(text==='ok'){
            //保存所有数据
            return
        }
        if('0123456789.'.split(',').concat('删除','清空').indexOf(text)){
            _setOutput(SetOutPut(text,output))
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