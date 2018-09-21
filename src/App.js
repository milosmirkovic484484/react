import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [

            {name: 'Milos' , age: 28},
            {name: 'Stefan', age: 29},
            {name: 'Milena', age: 26}
            ],
        otherState: 'some other value'
    }


    switchNameHandler = (newName) => {
       // console.log('mamammaa');
        //this.state.persons[0].name = "Mirkovic";

        this.setState({ persons: [

                {name:  newName , age: 28},
                {name: 'Stefan', age: 29},
                {name: 'Milena', age: 20}
            ]
        } )
    };


    nameChangedHandler =  (event) => {
        this.setState({ persons: [

                {name:  'Comi' , age: 28},
                {name: event.target.value, age: 29},
                {name: 'Milena', age: 26}
            ]
        } )
    }


  render() {
        const style = {
            backgroundColor: 'White',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

   return (
        <div className="App">
        <h1> Sey hay react app</h1>
          <p>This is really working</p>
          <button style= {style}
      onClick={() => this.switchNameHandler('Mirkovic!!!!!!!')}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Milos!')} changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
      <Person name={this.state.persons[1].name}  age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}  />
      </div>

        );
      // return React.createElement('div', null, React.createElement('h1',{className: 'App'}, 'does this work now?'));
  }
}

export default App;
