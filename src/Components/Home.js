import React from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Link to="/login">Watch Login Template</Link>
                <Link to="/register">Watch Register Template</Link>
            </header>
        </div>
    );
}

export default Home;
