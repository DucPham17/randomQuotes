import React from 'react';
import TodoItem from "./TodoItem.js";
import todoList from "./todoList.js"

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        todoData : todoList
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    console.log("changed"+ id);
    this.setState(prevState => {
        const update = prevState.todoData.map(item => {
          if(item.id === id){
            item.completed = !item.completed;
          }
          return item;
        })
        return {todoData : update};
    }) 
    console.log(this.state.todoData)
  }
  render(){
    const condition = this.state.todoData.map(item => 
        <TodoItem key={item.id} id={item.id} name ={item.name} description={item.description} 
        completed ={item.completed} handleChange={this.handleChange} />
    )
    return (
    <div>
      {condition}
    </div>
    )
  }
}
export default App;
