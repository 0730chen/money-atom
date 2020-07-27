import React from "react";
import UserTags from "../../UseTags";
import {useParams} from 'react-router-dom'
type Params = {
    id:string
}
const EditorTags:React.FC = ()=>{
    const {findTag}= UserTags()
    let {id} = useParams<Params>()
    const tag =findTag(parseInt(id))
    return (
        <div>{tag.name}</div>
    )
}
export default EditorTags