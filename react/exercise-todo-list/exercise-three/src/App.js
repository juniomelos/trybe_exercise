import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedItem: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.selectState = this.selectState.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo() {
    document.getElementsByClassName(this.state.selectedItem)[0].remove();
    this.setState({ selectedItem: null });
  }

  selectState(event) {
    this.setState({ selectedItem: event.target.value });
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          disabledButton={this.state.selectedItem}
          removeTodo={() => this.removeTodo()}
        />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <li key={index + 1}>
                <Item content={todo} id={index} clickRemoveTodo={this.selectState} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default App;
