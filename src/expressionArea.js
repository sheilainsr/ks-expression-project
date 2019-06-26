"use strict";

import React from 'react';
import Expression from './expression';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';

function ExpressionArea(props){
    const [, drop] = useDrop({
        accept: ItemTypes.EXPRESSION,
        drop: () => moveExpression(),
      })

        return ( 
            <div className="expressionAreaRule" ref={drop}>
               <Expression name ={props.expression.name} numArgs={props.expression.numArgs}></Expression>
            </div>
        );
}

function moveExpression()
{
    console.log("drop happening");
}

export default ExpressionArea;