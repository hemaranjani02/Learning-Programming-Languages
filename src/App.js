import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind  from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet name="Hema" heroName="ranjani">
         <p>This is childern props</p>
        </Greet> */}
        {/* <Welcome name="Hey" heroName="Hi"/> */}
        {/* <Hello/> */}
        {/* <Counter/>
        <Message>
          <button onClick={HTMLButtonElement}>Subscribe</button>
        </Message> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreetings/> */}
        <NameList/>
      </div>
    )
  }
}

export default App;
