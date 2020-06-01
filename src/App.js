import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//class Hello extends Component {
//  render () {
//  return <h2>{this.props.title}</h2>
//  }
//}
const Hello = (props) => <h2>{props.title}</h2>
class Text extends Component {
  render () {
    const txtBool = this.props.boolean ? 'True':'False'
    const mappedNumbers = this.props.arrayOfNumbers.map(n=>n*2)
  return (
    <div>
      <p>{this.props.text}</p>
      <p>{this.props.number}</p>
      <p>{txtBool}</p>
      <p>{this.props.arrayOfNumbers.join('-')}</p>
      <p>{mappedNumbers.join(',')}</p>
      <p>{this.props.objectWithInfo.key1}</p>
    </div>
  )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Mother Fucker'/>
      </header>
      <Text 
        arrayOfNumbers={[2,5,3,7,4,5]}
        boolean
        number={5} 
        objectWithInfo={{ key1: 'value1', key2: 'value2'}}
        text='Puto el que lee' />
    </div>
  );
}

export default App;
