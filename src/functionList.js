"use strict";

import React from 'react';
import Function from './function';
import './functionList.css';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

function FunctionList(props)
{
        
        /* map the list of function names to jsx elements, render must return a single 
            element so now we wrap it in a single div */
        var functionsList = props.functions.map(element=><Function function={element}/>);
        return <div className="functionListWrapper">{functionsList}</div>;
}

export default FunctionList;