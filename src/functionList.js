import React from 'react';
import Function from './function';
import './functionList.css';

function FunctionList(props)
{
        
        /* map the list of function names to jsx elements, render must return a single 
            element so now we wrap it in a single div */
        var functionsList = props.functions.map(element=><Function function={element} key={element.name}/>);
        return <div className="functionListWrapper">{functionsList}</div>;
}

export default FunctionList;