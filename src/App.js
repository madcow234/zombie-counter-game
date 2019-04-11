import React, { Component } from 'react';
import './App.css';
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
        <div>
            <div style={{height: '100vh', width: '25vw', display: 'inline-block', float: 'left', border: 'solid', borderColor: 'blue'}}/>
            <div style={{height: '100vh', width: '50vw', border: 'solid', borderColor: 'black', overflowX: 'hidden', float: 'left'}}>
              <Timer/>
              <Timer/>
              <Timer/>
              <Timer/>
              <div style={{position: 'relative', display: 'inline-block'}}>
                <div className='Scrolling-background'/>
                <div className='Distant-clouds'/>
                <div className='Foreground-clouds'/>
                <div className='Foreground-trees'/>
              </div>
            </div>
            <div style={{height: '100vh', width: '25vw', display: 'inline-block', float: 'left', border: 'solid', borderColor: 'green'}}/>
        </div>
    );
  }
}
export default App;
