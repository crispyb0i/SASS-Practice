import React, { Component } from 'react'
import './Form.scss'
import Todos from './Todos/Todos.js'

export default class Form extends Component {
  state = {
    value: '',
    todos: ["Feed the dog","Slay the dragon","Excercise"]
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let tasks = [...this.state.todos];
    tasks.push(this.state.value);
    this.setState({todos: tasks, value:''})
    console.log(this.state)
  }

  render(){
    return (
      <div className="formContainer">
        <div className="formInput">
          <form
            id="todoForm"
            onSubmit={this.handleSubmit}
            >
            <input
              type="text"
              placeholder="Enter task"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </form>
          <button
            type="submit"
            form="todoForm"
          >Add Task</button>
        </div>
        <Todos tasks={this.state.todos} />
      </div>
    )
  }
}
