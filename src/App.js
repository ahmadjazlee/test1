import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      dataLists: [],
      titleHeader: 'React Crud Application'
    });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Button is clicked!');

    const dataLists = this.state.dataLists
    const firstNameInput = this.refs.firstName.value;
    const lastNameInput = this.refs.lastName.value;

    let data = {
      firstNameInput, lastNameInput
    }
    dataLists.push(data);
    this.setState({
      dataLists: dataLists
    })

    console.log(dataLists);
    this.refs.myInputForm.reset();
    this.refs.firstName.focus();
  }
  removeButton = (i) => {
    const dataLists = this.state.dataLists;
    dataLists.splice(i, 1);
    this.setState({
      dataLists: dataLists
    })
    console.log(dataLists);
    this.refs.myInputForm.reset();
    this.refs.firstName.focus();
  }
  editButton = (i) => {
    const dataLists = this.state.dataLists[i];
    this.refs.firstName.value = dataLists.firstNameInput;
    this.refs.lastName.value = dataLists.lastNameInput;    
    
    console.log(this.state.dataLists);
    // this.refs.firstName.focus();
  }
  render() {

    let styleInput = {
      color: 'red'
    };
    const dataLists = this.state.dataLists;

    return (
      <div className="App">
        <h1 style={styleInput}>{this.state.titleHeader}</h1>
        <form ref='myInputForm'>
          <label />First Name:
        <input
            type='text'
            ref='firstName'
            placeholder='Enter First Name'
          />
          <br />
          <label />Last Name:
        <input
            type='text'
            ref='lastName'
            placeholder='Enter Last Name'
          />
          <br />
          <button type='button' onClick={this.handleSubmit} >Submit</button>

        </form>
        <form className="showData">
          {dataLists.map((data, i) =>
            <ol key={i} className="list">
              {i + 1}. {data.firstNameInput}, {data.lastNameInput}
              <button type='button' onClick={() => this.removeButton(i)} >Remove</button>
              <button type='button' onClick={() => this.editButton(i)} >Edit</button>
            </ol>
          )}
        </form>
      </div>

    );
  }
}

export default App;
