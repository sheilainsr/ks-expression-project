"use strict";

import React from 'react';
import './mainPage.css';
import FunctionList from './functionList';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ExpressionArea from './expressionArea';

function MainPage(props){
        return (
        <DndProvider backend={HTML5Backend}>
        <div>
          <ExpressionArea expression = {props.expression}/>
            <div >
            <FunctionList functions={props.functionList}></FunctionList>
            </div>
        </div>
        </DndProvider>
        );
}

function moveExpression()
{
    console.log("drop happening");
}

export default MainPage;