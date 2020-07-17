import {useState} from "react";


const UserTage = ()=>{
    const [tags,setTags] = useState<string[]>(['衣服','食物','住宿','出行'])
    return {
        tags,setTags
    }

}

export default UserTage