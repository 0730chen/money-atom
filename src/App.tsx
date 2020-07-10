
import React from "react"
import styled from "styled-components";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./views/Home/Home";
import Tag from "./views/Tag/Tag";
import Statistics from "./views/Statistics/Statistics";
import NotFound from "./views/404/NotFound";
const Container = styled.div`
height: 100%;
width: 100%;
overflow: hidden;
`;
function App() {
  return (
      <Router>
          <Container>
                  <Switch>
                      <Route exact path="/money" component={Home} />
                      <Route path="/tag" component={Tag} exact />
                      <Route path="/statistics" component={Statistics} exact />
                      <Redirect exact from="/"  to="/money"/>
                      <Route  exact path="*"  component={NotFound}/>
                  </Switch>
          </Container>
      </Router>
  );
}

export default App;
