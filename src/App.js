// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and finish the reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
         //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

// class App extends React.Component{

//    initial = 0;
//   constructor(props){
//     super(props);
//     this.state = {
//       count: this.initial,
//     };
//   }

//   Increase = () =>{
//     this.setState({count: this.state.count + 1});
//   }

//   Decrease = () => {
//     var current = this.state.count;
//     if(current > 0){
//       this.setState({count: current - 1});
//     }else{
//       this.setState({count: 0});
//     }
//   }
//   Default =() => {
//     this.setState({count: this.initial});
    
//   }

//   render(){
//     return(
//       <div className="wrapper">
//         <p>You clicked {this.state.count} times</p>
//         <button className = "Increase" onClick ={this.Increase}>Click Me!</button>
//         {/* {console.log("count", this.state.count)} */}
//         <button className = "Increase" onClick ={this.Decrease}>Unclick Me!</button>
//         <button className = "Increase" onClick ={this.Default}>Default</button>
//       </div>
//     )
//   }
// }

function App (){
  const initial = 0;
  const [count, setCount] = useState(initial);

  const Increase = () =>{
    setCount(count + 1)
  } 

  const Decrease = () =>{
    if( count > 0) {
      setCount(count - 1);
    }else {
      setCount(0);
    }
  }

  const Default = () => {
    setCount(initial);
    console.log("I'm here");
  }
  return(
    <div className="wrapper">
      <p>You clicked {count} times</p>
      <button className = "Increase" onClick ={Increase}>Click Me!</button>
      <button className = "Increase" onClick ={Decrease}>Unclick Me!</button>
      <button className = "Increase" onClick ={ Default}>Default</button>
    </div>
  )
}
export default App;


