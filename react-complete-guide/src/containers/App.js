import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor (props) {
    super(props);
  }

  // behind the scenes, state init is added to constructor
  state = {
    persons: [
      { id: '1', name: 'Brogan', age: '23'},
      { id: '2', name: 'Jessica', age: 'almost 24' },
      { id: '3', name: 'Mario', age: '59'}
    ],
    otherStuff: 'Jessica likes puzzles.',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice() to avoid pointer
    const persons = [...this.state.persons]; // ES6 way of copying
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
        
    }
  
    return (
      <div className='App'>
        <Cockpit
          appTitle={this.props.appTitle}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

export default App;

// import React, {Component} from 'react';
// import './App.css';
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import CharComponent from './CharComponent/CharComponent';

// class App extends Component {
//   state = {
//     text: '',
//     minRequiredLength: 5
//   }

//   updateTextHandler = (event) => {
//     const newText = event.target.value;
//     this.setState({
//       text: newText,
//     })
//   }

//   removeCharHandler = (index) => {
//     // const text = this.state.text.split('');
//     // text.splice(index, 1);
//     // const newText = text.join('');
//     const newText = this.state.text.split('').splice(index, 1).join('');
//     this.setState({
//       text: newText,
//     })
//   }

//   render() {
//     const charList = this.state.text.split('').map((char, index) => {
//       return (
//         <CharComponent
//           char={char}
//           key={index}
//           click={() => this.removeCharHandler(index)}
//         />
//       )
//     });

//     return (
//       <div className='App'>
//         <input
//           type='text'
//           value={this.state.text}
//           onChange={this.updateTextHandler}
//         />
//         <p>{this.state.text}</p>
//         <p>{this.state.text.length}</p>
//         <ValidationComponent
//           length={this.state.text.length}
//           minLength={this.state.minRequiredLength}
//         />
//         <div>
//           {charList}
//         </div>
//       </div>
//     )
//   }
// }

// export default App;
