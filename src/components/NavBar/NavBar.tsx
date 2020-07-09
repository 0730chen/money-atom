import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import styled from "styled-components";
const Nav  = styled.div`
  border: 1px solid black;
`;
const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid black;
`;
const Ul  =styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li{
  width: 33.3333%;
  text-align: center;
  padding: 16px;
  }
`;
const SwitchWarpper =  styled.div`
    flex: 1;
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
                            <Route path="/statistics" component={Topics} exact />
                            <Redirect exact from="/"  to="/money"/>
                            <Route  exact path="*"  component={NoMatch}/>
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
const Home = () => (
    <Wrapper>
        <h2>Home</h2>
    </Wrapper>
);

const Tag = () => (
    <Wrapper>
        <h2>About</h2>
    </Wrapper>
);

const Topics = () => (
    <Wrapper>
        <h2>Topics</h2>
    </Wrapper>
);
const NoMatch = ()=>(
    <Wrapper>
        当前页面不存在
    </Wrapper>
);


export default NavBar