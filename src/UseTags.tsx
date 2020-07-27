import {useState} from "react";
import {createId} from "./lib/createId";


const UserTage = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>([
        {id:createId(),name:'衣服'},
        {id:createId(),name:'食物'},
        {id:createId(),name:'住宿'},
        {id:createId(),name:'出行'},]
    )
    return {
        tags,setTags
    }

}

export default UserTage