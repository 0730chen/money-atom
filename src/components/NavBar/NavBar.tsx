import React from "react";
import { NavLink} from "react-router-dom";
import styled from "styled-components";
import Icon from "../Icon/Icon";
const Ul  =styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li{
  width: 33.3333%;
  text-align: center;
  padding: 4px 0;
  color: white;
  .select{
  color:#FFCC99;
  }
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
                <NavLink to="/money" activeClassName="select">
                    <Icon name='money'/>
                    记一笔
                </NavLink>
            </li>
            <li>
                <NavLink to="/tag" activeClassName="select">
                    <Icon name='tag'/>
                    标签管理
                </NavLink>
            </li>
            <li>
                <NavLink to="/statistics" activeClassName="select">
                    <Icon name='statistics'/>
                    账目统计
                </NavLink>
            </li>
        </Ul>
    )
};

export default NavBar