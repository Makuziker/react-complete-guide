import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.persons !== this.props.persons;
  }
  render() {
    console.log('Persons rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          index={index}
          changed={(event) => this.props.changed(event, person.id)}
        />
      )
    });
  }
}

export default Persons;