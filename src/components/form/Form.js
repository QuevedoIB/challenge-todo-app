import React, { Component } from 'react';
import './Form.scss';
import Input from '../input/Input';
import todoService from '../../lib/services/TodoService';

export default class Form extends Component {

  state = {
    title: '',
    body: '',
  }

  onChangeInput = (event) => {
    event.preventDefault();

    const { target: { name, value } } = event

    this.setState({
      [name]: value,
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();

    await todoService.createTodo(this.state);

    this.setState({
      title: '',
      body: '',
    })

    this.props.getAllTodos();

  }

  render() {

    let arrayOfState = [];

    for (let prop in this.state) {
      arrayOfState = [...arrayOfState, prop]
    }

    return (
      <form className='container' onSubmit={this.onSubmit}>
        {arrayOfState.map(prop => {
          const holder = prop.charAt(0).toUpperCase() + prop.slice(1);
          return <Input key={prop} name={prop} value={this.state[prop]} placeholder={holder} changeCallback={this.onChangeInput} />
        })}
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
