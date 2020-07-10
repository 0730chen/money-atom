import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Icon from "../Icon/Icon";
const Ul  =styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #99CCCC;
  justify-content: center;
  li{
  width: 33.3333%;
  text-align: center;
  padding: 4px 0;
  color: white;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  }
`;
const NavBar =()=> {
    return (
        <Ul>
            <li>
                <Icon name='money'/>
                <Link to="/money">记一笔</Link>
            </li>
            <li>
                <Icon name='tag'/>
                <Link to="/tag">标签管理</Link>
            </li>
            <li>
                <Icon name='statistics'/>
                <Link to="/statistics">账目统计</Link>
            </li>
        </Ul>
    )
};

export default NavBar