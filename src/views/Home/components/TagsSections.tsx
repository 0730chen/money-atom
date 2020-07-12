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
    li{
      padding: 4px 16px;
      display: inline-block;
      border-radius: 10px;
      background: #82ffe0;
      font-size: 14px;
      margin: 8px 12px;
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
const TagsSections:React.FunctionComponent = ()=>{
    const [tags,setTags] = useState<string[]>(['衣服','食物','住宿','出行'])
    const onAddTag  = ()=>{
        const tagName = window.prompt('新增标签名')
        if(tagName !==null && tagName!==''){
            setTags([...tags,tagName])
        }else {
            alert('标签名不能为空')
        }
    }
    return(
        <Wrapper>
            <ul>
                {tags.map(tag=>{
                    return <li key={tag}>{tag}</li>
                })}
            </ul>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSections}