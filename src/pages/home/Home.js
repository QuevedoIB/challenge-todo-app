import React, { Component } from 'react';
import List from '../../components/list/List';
import Form from '../../components/form/Form';
import todosServices from '../../lib/services/TodoService';
import './Home.scss';

export default class Home extends Component {

  state = {
    todosList: [],
    loading: true,
  }

  componentDidMount = () => {
    this.getAllTodos();
  }

  getAllTodos = async () => {
    const todosList = await todosServices.getAllTodos();

    this.setState({
      todosList,
      loading: false,
    })
  }

  render() {

    const { todosList, loading } = this.state;

    return (
      loading ? <h1>Loading...</h1> :
        <>
          <List todosList={todosList} getAllTodos={this.getAllTodos} />
          <Form getAllTodos={this.getAllTodos} />
        </>
    )
  }
}

