import React, { Component } from 'react';
import './App.css';
import List from './list'

class App extends Component {
  state={
  	tasks :[
  	{ name: 'make your ctrlB project into react and ', time: 'one month'},
  	{ name:' make actions on google app',time:'until april ending'}
  	],
  }

  handleChange = (=>{

  })
  render() {
    return (
      <div className="whole">
        <h2>My tasks </h2>
       {this.state.tasks.map((task)=>{
        return <List name={task.name} time={task.time}/>
          
       })}
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"  onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      </div>
    );
  }
}

export default App;
