import React from 'react';
import './mainPage.css';
import Expression from './expression';
import FunctionList from './functionList';

class MainPage extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return <div>
            <div>
               <Expression name ={this.props.expression.name} numArgs={this.props.expression.numArgs}></Expression>
            </div>
            <div>
            <FunctionList functions={this.props.functionList}></FunctionList>
            </div>
        </div>;
    }
    }

export default MainPage;