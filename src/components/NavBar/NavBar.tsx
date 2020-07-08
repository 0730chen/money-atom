import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {Link} from "react-router-dom";

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/money">记一笔</Link>
                            </li>
                            <li>
                                <Link to="/tag">标签管理</Link>
                            </li>
                            <li>
                                <Link to="/statistics">账目统计</Link>
                            </li>
                        </ul>
                        <Switch>
                        <Route exact path="/money" component={Home} />
                        <Route path="/tag" component={Tag} exact />
                        <Route path="/statistics" component={Topics} exact />
                        <Redirect exact from="/"  to="/money"/>
                        <Route  exact path="*"  component={NoMatch}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Tag = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = () => (
    <div>
        <h2>Topics</h2>
    </div>
);
const NoMatch = ()=>(
    <div>
        当前页面不存在
    </div>
);


export default NavBar