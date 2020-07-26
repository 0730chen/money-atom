import {useState} from "react";


const UserTage = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>([
        {id:1,name:'衣服'},
        {id:2,name:'食物'},
        {id:3,name:'住宿'},
        {id:4,name:'出行'},]
    )
    return {
        tags,setTags
    }

}

export default UserTage