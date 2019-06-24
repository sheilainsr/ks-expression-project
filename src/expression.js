import React from 'react';
import './expression.css';

class Expression extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        var argArray = [];
        for (var i = 0; i < this.props.numArgs; i++)
        {
            argArray.push(<div className="parameter"></div>);
        }
        return(
<div className="expressionWrapper">
    <div>
        {this.props.name}
    </div>
     {argArray}
</div>
        );
    }
    }

    export default Expression;