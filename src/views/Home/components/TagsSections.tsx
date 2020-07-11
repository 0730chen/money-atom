import React from "react";
import styled from "styled-components";

const _TagsSections = styled.section`
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
    return(
        <_TagsSections>
            <ul>
                <li>衣服</li>
                <li>食物</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <button>新增标签</button>
        </_TagsSections>
    )
}
export {TagsSections}