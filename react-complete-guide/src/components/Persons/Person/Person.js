import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
  render() {
    console.log(`Person ${this.props.index} rendering...`);
    return (
      <div className='Person'>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}

export default Person;