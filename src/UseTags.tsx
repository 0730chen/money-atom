import React, {useState, useEffect} from "react";
import {createId} from "./lib/createId";
import axios from 'axios'
import {useUpdate} from "./hooks/useUpdate";
import qs from "qs";

 const defaultTags = [
    {id:createId(),name:'衣服'},
    {id:createId(),name:'食物'},
    {id:createId(),name:'住宿'},
    {id:createId(),name:'出行'},
]

const UserTags = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>(
        []
    )
    const [open, setOpen] =useState(false);

    //表单的打开和关闭
    const initTgas = ()=>{
        return defaultTags
    }
    const dialogOpen = () => {
        setOpen(true);
    };

    const dialogClose = async (value:any):Promise<void> => {
        setTags([...tags,{id:createId(),name:value}])
        let name = window.localStorage.getItem('name')
        let params = {
            name:name,
            tags:[...tags,{id:createId(),name:value}]
        }
        try {
            let res = await axios.put('/api/user/tags',qs.stringify(params))
            console.log(res)
            let tags = res.data.data.tags
            localStorage.setItem('tags',JSON.stringify(tags))
            setOpen(false);
        }catch (e) {

        }
    };
    //第一次会将空数组也渲染
    //使用一个标记
    useEffect(()=>{
        let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
        if(localTags.length===0){
            localTags = defaultTags
        }
        setTags(localTags)
    },[])
    useUpdate(()=>{
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
    const getName = (id:number)=>{
        const tag = tags.filter(t=>t.id===id)[0]
        return tag ? tag.name:''
    }
    return {
        tags,setTags,findTag,updateTag,findTagIndex,deleteTag,onAddTag,getName,open,dialogClose,dialogOpen,initTgas
    }

}

export default UserTags