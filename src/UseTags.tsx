import {useState, useEffect} from "react";
import {createId} from "./lib/createId";

// const defaultTags = [
//     {id:createId(),name:'衣服'},
//     {id:createId(),name:'食物'},
//     {id:createId(),name:'住宿'},
//     {id:createId(),name:'出行'},]

const UserTags = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>(
        []
    )
    useEffect(()=>{
       let tags = JSON.parse(window.localStorage.getItem('tags')||'[]')
        setTags(tags)
    },[])
    useEffect(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
    const onAddTag  = ()=>{
        const tagName = window.prompt('新增标签名')
        if(tagName !==null && tagName!==''){

            setTags([...tags,{id:createId(),name:tagName}])
        }else {
            alert('标签名不能为空')
        }
    }
    const findTag = (id:number) => tags.filter(e=>e.id===id)[0]
    const findTagIndex = (id:number) =>{
        let result = -1
        for(let i =0;i<tags.length;i++){
            if(tags[i].id===id){
                result = i
                break
            }
        }
        return result
    }
    const updateTag = (id:number,obj:{name:string})=>{
        setTags(tags.map(tag=>tag.id===id?{id,name:obj.name}:tag))

    }
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id !==id))
    }
    return {
        tags,setTags,findTag,updateTag,findTagIndex,deleteTag,onAddTag
    }

}

export default UserTags