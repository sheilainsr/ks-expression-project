"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Expression from './expression';
import FunctionList from './functionList';
import MainPage from './mainPage';


function dropHandler(item)
{
    ReactDOM.render(<MainPage functionList={functionNames} expression={item.function} dropHandler={dropHandler}>  </MainPage>, document.getElementById('root'));

}

var functionNames=[
    {name:"add",
numArgs:2},
{name:"subtract",
numArgs:2},
{name:"multiply",
numArgs:2},
{name:"divide",
numArgs:2},
{name:"doSomethingComplicated",
numArgs:3}
];

var expression={name:"add", numArgs:2}

ReactDOM.render(<MainPage functionList={functionNames} expression={expression} dropHandler={dropHandler}>  </MainPage>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
