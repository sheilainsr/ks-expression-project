import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Expression from './expression';
import FunctionList from './functionList';

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<Expression name='foo' numArgs='3'></Expression>,document.getElementById('root'));

var functionNames=[
    {name:"add",
numArgs:2},
{name:"subtract",
numArgs:2},
{name:"doSomethingComplicated",
numArgs:0}
];

ReactDOM.render(<FunctionList functions = {functionNames}></FunctionList>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
