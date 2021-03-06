import React from 'react';
import './expression.css';

class Expression extends React.Component {

    render() {

        var argArray = [];
        for (var i = 0; i < this.props.numArgs; i++) {
            argArray.push(<div className="parameter"></div>);
        }
        return (
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