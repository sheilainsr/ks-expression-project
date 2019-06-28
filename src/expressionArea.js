import React from 'react';
import Expression from './expression';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './Constants';
import './expressionArea.css';


function ExpressionArea(props) {

    //query drag/drop state to perform an action when the expression is being moved
    const [{isDragging}, drop] = useDrop({
        accept: ItemTypes.EXPRESSION,
        drop: props.dropHandler,
        collect: monitor => ({
            isDragging: !!monitor.canDrop()
        })
    })

    var styleClassesToUse = "expressionAreaRule";
    if(isDragging)
    {
        styleClassesToUse += " expressionAreaRuleForDragging";
    }

    //Handle starting case where expression is NULL
    if (!props.expression) {
        return (
            <div className={styleClassesToUse} ref={drop}>
            </div>
        );
    }
    else {
        return (
            <div className={styleClassesToUse} ref={drop}>
                <Expression name={props.expression.name} numArgs={props.expression.numArgs}></Expression>
            </div>
        );
    }
}



export default ExpressionArea;