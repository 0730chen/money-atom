import React from "react";
import styled from "styled-components";
import UserTags from "UseTags";
import {createId} from "../../../lib/createId";

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ul{
  margin: 0 -12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li{
      padding: 4px 16px;
      display: inline-block;
      border-radius: 10px;
      background: #82ffe0;
      font-size: 14px;
      white-space: nowrap;
      margin: 8px 12px;
      &.selected{
        background: chocolate;
      }
    }
  }
  button{
  font-family: inherit;
  background: none;
  border: none;
  padding: 2px 4px;
  border-bottom: 1px solid #333;
  color: #666;
  }
`;

type Pros =  {
    selected:number[],
    onChange:(selected:number[])=>void
}

const TagsSections:React.FunctionComponent<Pros> = (props:Pros)=>{
    let{tags,setTags} = UserTags()
    const selectedTagIds = props.selected
    const onAddTag  = ()=>{
        const tagName = window.prompt('新增标签名')
        if(tagName !==null && tagName!==''){

            setTags([...tags,{id:createId(),name:tagName}])
        }else {
            alert('标签名不能为空')
        }
    }
    const onToggleTag  = (tagId:number)=>{
        const index  =selectedTagIds.indexOf(tagId)
        if(index>=0){
            props.onChange(selectedTagIds.filter(t=>t!==tagId))
        }else{
            props.onChange([...selectedTagIds,tagId])
        }
    }
    const getClass = (tagsId:number) =>{
        return selectedTagIds.indexOf(tagsId) >=0?'selected':''
    }
    return(
        <Wrapper>
            <ul>
                {tags.map(tag=>{
                    return <li key={tag.id} onClick={()=>onToggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>
                })}
            </ul>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSections}