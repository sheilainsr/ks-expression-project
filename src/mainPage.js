"use strict";

import React from 'react';
import './mainPage.css';
import Expression from './expression';
import FunctionList from './functionList';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class MainPage extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
        <DndProvider backend={HTML5Backend}>
        <div>
            <div>
               <Expression name ={this.props.expression.name} numArgs={this.props.expression.numArgs}></Expression>
            </div>
            <div>
            <FunctionList functions={this.props.functionList}></FunctionList>
            </div>
        </div>
        </DndProvider>
        );
    }
    }

export default MainPage;