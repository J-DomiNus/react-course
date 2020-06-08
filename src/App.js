import React, { Component } from 'react';
import cars from './data/original.json'

class CarItem extends Component  {
  render () {
    const { car } = this.props

    return (
      <li>
        <p><strong>-Model: </strong>{car.name}</p> 
        <p><strong>-Brand: </strong>{car.company}</p>
      </li>

    )
  }
}
class App extends Component {
  render () {

    return (
      <div className='App'>
        <h4>Working on lists with objects</h4>
        <ul>
          {
            cars.map(x => { 
              return <CarItem key={x.id} car={x} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
