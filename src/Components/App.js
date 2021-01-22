import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router , Route} from 'react-router-dom';
import createBrowserHistory from '../History';
import {Link} from 'react-router-dom';

import Posts from "./Posts";
import Users from "./Users";
import Home from './Home';

class App extends Component {
    render() {
        return (
            <div className="">
                <Router history={createBrowserHistory}>
                    <div className="bg-primary p-3">
                        <Link style={{margin:"0 50px", color:"white"}} to="/"> Home </Link>
                        <Link style={{margin:"0 50px", color:"white"}} to="/posts"> Posts </Link>
                        <Link style={{margin:"0 50px", color:"white"}} to="/users"> Users </Link>
                    </div>
                    <div className="p-3" >
                        <Route exact path="/" exact   component={Home}   ></Route>
                        <Route       path="/users" exact   component={Users}   ></Route>
                        <Route       path="/posts" exact   component={Posts}   ></Route>
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {store : state};
};

export default connect(mapStateToProps) (App);
