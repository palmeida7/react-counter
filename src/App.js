import React from 'react';
import './App.css';
import Message from "./Message";
import Button from "./Button";
import Hidden from "./Hidden";
import Clicks from "./Clicks";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//           Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    clickedTimes: 0,
    message: "Hey this is nice"
    }
  }
  whenClicked(){
    this.setState({...this.state, clickedTimes:this.state.clickedTimes +1});
    console.log('Click on Child button' + this.state.clickedTimes)
    console.log(this)
  }
  render() {
    return(
      <div className="App">
        <h1>Hello React</h1>
        <Message 
          message1={'It features React'} 
          message={'Welcome to this page'} 
        />
        <Message message={'Check out this Counter'}/>
        {/* <Button text="Click Here" whenClicked={this.whenClicked.bind(this)}
        clickedTimes = {this.state.clickedTimes}
        /> */}
        <Clicks />
        <Hidden />
      </div>
    )
  }
}
export default App;