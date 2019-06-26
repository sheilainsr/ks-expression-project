"use strict";

import React from 'react';
import './functionList.css';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

function FunctionList(props)
{
           /* Handle D&D */
           const [{isDragging}, drag] = useDrag({
            item: { type: ItemTypes.EXPRESSION },
                collect: monitor => ({
                    isDragging: !!monitor.isDragging(),
                }),
          })

        /* map the list of function names to jsx elements, render must return a single
            element so now we wrap it in a single div */
        var functionsList = props.functions.map(element=><div className="functionNameRule" ref={drag}>{element.name}</div>)
        return <div className="functionListWrapper">{functionsList}</div>;
}

export default FunctionList;