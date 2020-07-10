import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Home from "../../views/Home/Home";
import Statistics from "../../views/Statistics/Statistics";
import Tag from "../../views/Tag/Tag";
import NotFound from "../../views/404/NotFound";
const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`;
const Ul  =styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #99CCCC;
  justify-content: center;
  li{
  width: 33.3333%;
  text-align: center;
  padding: 16px;
  color: white;
  }
`;
const SwitchWarpper =  styled.div`
    flex: 1;
    background: #FFCC99;;
    color: black;
    overflow: auto;
`;
class NavBar extends React.Component {
    render() {
        return (
                <Router>
                    <Container>
                        <SwitchWarpper>
                        <Switch>
                            <Route exact path="/money" component={Home} />
                            <Route path="/tag" component={Tag} exact />
                            <Route path="/statistics" component={Statistics} exact />
                            <Redirect exact from="/"  to="/money"/>
                            <Route  exact path="*"  component={NotFound}/>
                        </Switch>
                        </SwitchWarpper>
                        <Ul>
                            <li>
                                <Link to="/money">记一笔</Link>
                            </li>
                            <li>
                                <Link to="/tag">标签管理</Link>
                            </li>
                            <li>
                                <Link to="/statistics">账目统计</Link>
                            </li>
                        </Ul>
                    </Container>
                </Router>
        )
    }
}



export default NavBar