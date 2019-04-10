import React, { Component } from 'react';
import todosServices from '../../lib/services/TodoService';
import { Link } from 'react-router-dom';
import './List.scss';

export default class List extends Component {

  state = {
    text: '',
  }

  onDeleteTodo = async (id) => {

    await todosServices.deleteTodo(id);

    this.props.getAllTodos();
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {

    const { todosList } = this.props;

    const todosListFiltered = todosList.filter(todo => todo.title.includes(this.state.text));

    return (
      <div className='list-box container'>
        <input value={this.state.text} placeholder='Search' onChange={this.onChange} ></input>
        <section className='container'>
          {todosListFiltered.map((todo, index) => {
            return <div className='container' key={`${todo.title}${index}`}>
              <Link to={`/todo/${todo._id}`}>
                <h3>{todo.title}</h3>
              </Link>
              <p>{todo.body}</p>
              <button onClick={() => this.onDeleteTodo(todo._id)}>Delete Todo</button>
            </div>
          })}
        </section>
      </div>
    )
  }
}