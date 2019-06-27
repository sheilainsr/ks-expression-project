"use strict";

import React from 'react';
import Expression from './expression';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';

function ExpressionArea(props){

    const [, drop] = useDrop({
        accept: ItemTypes.EXPRESSION,
        drop: props.dropHandler
      })

    //Handle starting case where expression is NULL
    if(!props.expression)
    {
        return ( 
            <div className="expressionAreaRule" ref={drop}>
            </div>
        );
    }
    else
    {
        return ( 
            <div className="expressionAreaRule" ref={drop}>
               <Expression name ={props.expression.name} numArgs={props.expression.numArgs}></Expression>
            </div>
        );
    }
}



export default ExpressionArea;