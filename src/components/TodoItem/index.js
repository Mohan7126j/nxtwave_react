// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItems extends Component {
  render() {
    const {todoItemDetails, onDelete} = this.props
    const {title, id} = todoItemDetails
    const deleteItem = () => {
      onDelete(id)
    }
    return (
      <li className="todo-item">
        <p className="todo-item-name">{title}</p>
        <button type="button" onClick={deleteItem}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItems
