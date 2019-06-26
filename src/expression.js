"use strict";

import React from 'react';
import './expression.css';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

class Expression extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {

        // /* Handle D&D */
        // const [{isDragging}, drag] = useDrag({
        //     item: { type: ItemTypes.EXPRESSION },
        //         collect: monitor => ({
        //             isDragging: !!monitor.isDragging(),
        //         }),
        //   })

        var argArray = [];
        for (var i = 0; i < this.props.numArgs; i++)
        {
            argArray.push(<div className="parameter"></div>);
        }
        return(
<div className="expressionWrapper"  /*ref={drag}*/>
    <div>
        {this.props.name}
    </div>
     {argArray}
</div>
        );
    }
    }

    export default Expression;