import {useState} from "react";
import {createId} from "./lib/createId";

const defaultTags = [
    {id:createId(),name:'衣服'},
    {id:createId(),name:'食物'},
    {id:createId(),name:'住宿'},
    {id:createId(),name:'出行'},]

const UserTags = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>(
        defaultTags
    )
    return {
        tags,setTags
    }

}

export default UserTags