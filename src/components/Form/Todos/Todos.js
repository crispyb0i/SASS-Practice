import React from 'react'
import './Todos.scss'

export default function Todos(props) {
  return(
    <div className="taskList">
      <ul>
        {props.tasks.map(item => <li className="todoItem">{item}</li>)}
      </ul>
    </div>
  )
}
