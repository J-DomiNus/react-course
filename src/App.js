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
    const {
      arrayOfNumbers,
      boolean,
      multiply,
      number,
      objectWithInfo,
      text,
      title
    } = this.props
    const txtBool = boolean ? 'True':'False'
    const mappedNumbers = arrayOfNumbers.map(multiply)
  return (
    <div>
      {title}
      <p>{text}</p>
      <p>{number}</p>
      <p>{txtBool}</p>
      <p>{arrayOfNumbers.join('-')}</p>
      <p>{mappedNumbers.join(',')}</p>
      <p>{objectWithInfo.key1}</p>
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
        multiply={(number) => number * 3}
        number={5} 
        objectWithInfo={{ key1: 'value1', key2: 'value2'}}
        text='Puto el que lee!' />
        title={<h1>I'm a Genious</h1>}
    </div>
  );
}

export default App;
