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
  display: flex;
  flex-direction: column;
  >.out-put{
  background: white;
   font-size: 36px;
    line-height: 72px;
   text-align: right;
   padding: 0 16px;
   box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
               inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  >.number-pad{
    background: white;
    >button{
    font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      text-align: center;
      border: none;
        &.ok{
           height: 128px;
          float: right;
        }
        &.dot{
            width: 50%;
        }
       &:nth-child(1){
        background: rgb(234,214,241)
     }
    &:nth-child(2),&:nth-child(5){
        background: rgb(223,220,241)
    }
    &:nth-child(3),&:nth-child(6),&:nth-child(9){
      background: rgb(214,219,238)
    }
    &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
      background: rgba(205,223,238);
    }
    &:nth-child(8),&:nth-child(11){
      background: rgba(196,229,238);
    }
    &:nth-child(12){
    background: rgba(187,230,236);
    }
    &:nth-child(14){
      background: #a0f1ea;
    }
  }
  }
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
                    <div className="out-put">
                        100
                    </div>
                    <div className="number-pad clear-fix">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>删除</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>清空</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button className="ok">ok</button>
                        <button>0</button>
                        <button className="dot">.</button>
                    </div>
                </NumberPad>
            </Container>
            <NavBar/>
        </Layout>
    );

export default  Home