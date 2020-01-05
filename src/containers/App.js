import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

  }
  state = {
    persons: [
      { id: 'nfdoje', name: 'Max', age: 28},
      { id: 'ovidnn', name: 'Manu', age: 29 },
      { id: 'jofidd', name: 'Stephanie', age: 27 }
  ],
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] get derived from state', props);

  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
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

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
