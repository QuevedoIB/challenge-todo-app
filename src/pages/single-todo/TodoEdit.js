import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import todoService from '../../lib/services/TodoService';
import Input from '../../components/input/Input';
import './TodoEdit.scss';

class TodoEdit extends Component {

  state = {
    todo: {},
    loading: true,
  }

  componentDidMount = () => {
    this.getTodoInfo();
  }

  getTodoInfo = async () => {
    const todo = await todoService.getOneTodo(this.props.match.params.id);

    this.setState({
      todo,
      loading: false,
    })
  }


  onChangeInput = (event) => {
    event.preventDefault();

    const { target: { name, value } } = event

    const todo = {
      ...this.state.todo,
      [name]: value,
    }

    this.setState({
      todo
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();

    await todoService.updateTodo(this.props.match.params.id, this.state.todo)

    this.props.history.push('/')

  }

  render() {
    const { loading } = this.state;

    let arrayOfTodoProps = [];

    for (let prop in this.state.todo) {
      arrayOfTodoProps = [...arrayOfTodoProps, prop]
    }

    return (
      loading ? <h1>Loading...</h1> : <form className='container edit-form' onSubmit={this.onSubmit}>
        {arrayOfTodoProps.map(todoProp => {
          const holder = todoProp.charAt(0).toUpperCase() + todoProp.slice(1);
          return <Input key={todoProp} name={todoProp} value={this.state[todoProp]} placeholder={holder} changeCallback={this.onChangeInput} />
        })}
        <button>Edit Todo</button>
      </form>

    )
  }
}

export default withRouter(TodoEdit);