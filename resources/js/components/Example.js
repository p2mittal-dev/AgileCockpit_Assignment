import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import dashboard from "./dashboard";
import createSchools from "./createSchools";
import EditSchools from "./EditSchools";
import Navbar from "./navbar";
import "../../css/app.css";

function Example() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" exact component={dashboard} />
                <Route path="/addSchools" exact component={createSchools} />
                <Route path="/edit/:id" exact component={EditSchools} />
            </Switch>
        </Router>
    );
}
export default Example;
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
