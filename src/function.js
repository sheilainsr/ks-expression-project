"use strict";

import React from 'react';
import './functionList.css';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

function Function(props) {
    /* Handle D&D */
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.EXPRESSION, function: props.function },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return <div className="functionNameRule" ref={drag}>{props.function.name}</div>;
}

export default Function;