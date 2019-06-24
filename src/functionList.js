import React from 'react';
import './functionList.css';

class FunctionList extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        /* map the list of function names to jsx elements, render must return a single
            element so now we wrap it in a single div */
        var functionsList = this.props.functions.map(element=><div className="functionNameRule">{element.name}</div>)
        return <div className="functionListWrapper">{functionsList}</div>;
    }
    }

export default FunctionList;