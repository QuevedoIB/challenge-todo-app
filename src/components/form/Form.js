import React, { Component } from 'react';
import './Form.scss';
import Input from '../input/Input';
import todoServices from '../../lib/services/TodoService';
import { withRouter } from 'react-router-dom';

class Form extends Component {

  state = {
    title: '',
    body: '',
  }

  componentDidMount = () => {
    if (this.props.dataForm) {
      this.setState(this.props.dataForm);
    }
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

    if (this.props.dataForm) {
      await todoServices.updateTodo(this.props.match.params.id, this.state)
      return this.props.history.push('/');
    }

    await todoServices.createTodo(this.state);

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

export default withRouter(Form);