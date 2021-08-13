import React from 'react';
import {  Route, withRouter } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'

const Routes = () => {
    return (
        <div className="row">
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} exact/>
            <Route path="/dashboard" component={Dashboard} exact/>
        </div>
    )
}
export default withRouter(Routes)