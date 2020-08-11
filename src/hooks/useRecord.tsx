import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

type MoneyRecord = {
    tags:number[]
    note:string
    category:'+'|'-'
    amount:number
}
export const useRecord = ()=>{
    const [records,setRecord] = useState<MoneyRecord[]>(
        [])
    useEffect(()=>{
        setRecord((JSON.parse(window.localStorage.getItem('records')||'[]')))
    },[])
    const addRecord = (record:MoneyRecord) =>{
        if(record.amount<=0){
            alert('填写金额')
            return false
        }
        if(record.tags.length ===0){
            alert('请选择标签')
            return false
        }
        setRecord([...records,record])
        return true
    }

    useUpdate(()=>{
        console.log(records,'更新')
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])
    return {records,addRecord}
}