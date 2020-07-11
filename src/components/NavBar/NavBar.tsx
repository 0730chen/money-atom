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
  a{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .icon{
    width: 24px;
    height: 24px;
}
  }
`;
const NavBar =()=> {
    return (
        <Ul>
            <li>
                <Link to="/money">
                    <Icon name='money'/>
                    记一笔
                </Link>
            </li>
            <li>
                <Link to="/tag">
                    <Icon name='tag'/>
                    标签管理
                </Link>
            </li>
            <li>
                <Link to="/statistics">
                    <Icon name='statistics'/>
                    账目统计
                </Link>
            </li>
        </Ul>
    )
};

export default NavBar