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
    const findTag = (id:number) => tags.filter(e=>e.id===id)[0]
    return {
        tags,setTags,findTag
    }

}

export default UserTags