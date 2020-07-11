import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  background:#FFCC99;
`;
const TagsSections = styled.section`
  background: #ffffff;
  padding: 12px 16px;
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
const NotesSection = styled.section`
  font-size: 14px;
  >label{
  display: flex;
  align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
    display: inline-block;
    width: 100%;
    height: 72px;
    background: none;
    border: none;
    }
  }
`
const TypeSection = styled.section`
  display: flex;
  font-size: 24px;
  background: #c4c4c4;
  >button{
  width: 50%;
  border:none;
  text-align: center;
  padding: 16px 0;
  position: relative;
  }
  &>.select::after{
    content: '';
    height: 3px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #aab0ff;
    left:0;
  }
`
const NumberPad = styled.section`
  border: 1px solid black;
`

const Home = ()=>(
        <Layout>
            <Container>
                <TagsSections>
                    <ul>
                        <li>衣服</li>
                        <li>食物</li>
                        <li>住</li>
                        <li>行</li>
                    </ul>
                    <button>新增标签</button>
                </TagsSections>
                <NotesSection>
                    <label>
                        <span>备注</span>
                        <input type="text" placeholder="在这里输入备注"/>
                    </label>
                </NotesSection>
                <TypeSection>
                    <button className="select">收入</button>
                    <button>支出</button>
                </TypeSection>
                <NumberPad>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                    </ul>
                </NumberPad>
            </Container>
            <NavBar/>
        </Layout>
    );

export default  Home