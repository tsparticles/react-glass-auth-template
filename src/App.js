import React from 'react';
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Switch, Route } from "react-router";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
        </Switch>
    );
}

export default App;
