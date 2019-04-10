import axios from 'axios';

class TodoServices {
  constructor() {
    this.todos = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true,
    })
  }

  getAllTodos() {
    return this.todos.get('/todos')
      .then(({ data }) => data)
      .catch(err => console.log(err))
  }

  getOneTodo(id) {
    return this.todos.get(`/todos/${id}`)
      .then(({ data }) => data)
      .catch(err => console.log(err))
  }

  createTodo(dataTodo) {
    return this.todos.post(`/todos`, { dataTodo })
      .then(({ data }) => data)
      .catch(err => console.log(err))
  }

  updateTodo(id, dataTodo) {
    return this.todos.put(`/todos/${id}`, { dataTodo })
      .then(({ data }) => data)
      .catch(err => console.log(err))
  }

  deleteTodo(id) {
    return this.todos.delete(`/todos/${id}`)
      .then(({ data }) => data)
      .catch(err => console.log(err))
  }
}

const todoServices = new TodoServices();

export default todoServices;