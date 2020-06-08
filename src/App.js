import React, { Component } from 'react';

class App extends Component {
  render () {
    const numbers = [1,1,3,4,6]

    return (
      <div className='App'>
        <h4>Working on lists</h4>
        {numbers.map((x, i)=>{
          return <p key={i}>i'm number {x}</p>
        })}
      </div>
    )
  }
}

export default App;
