import React, {useState} from "react";
import styled from "styled-components";

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
    selected:string[],
    onChange:(selected:string[])=>void
}

const TagsSections:React.FunctionComponent<Pros> = (props:Pros)=>{
    const [tags,setTags] = useState<string[]>(['衣服','食物','住宿','出行'])
    const selectedTags = props.selected
    const onAddTag  = ()=>{
        const tagName = window.prompt('新增标签名')
        if(tagName !==null && tagName!==''){
            setTags([...tags,tagName])
        }else {
            alert('标签名不能为空')
        }
    }
    const onToggleTag  = (tag:string)=>{
        const index  =selectedTags.indexOf(tag)
        if(index>=0){
            props.onChange(selectedTags.filter(t=>t!==tag))
        }else{
            props.onChange([...selectedTags,tag])
        }
    }
    return(
        <Wrapper>
            <ul>
                {tags.map(tag=>{
                    return <li key={tag} onClick={()=>onToggleTag(tag)} className={selectedTags.indexOf(tag)>=0?'selected':''}>{tag}</li>
                })}
            </ul>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSections}