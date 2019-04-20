import React, { Component } from 'react';
import './zombie-counter-game.css';
import Timer from "./components/timer";
import GlobalCounter from './components/global-counter'
import MapListener from "./components/map/map-listener";

class ZombieCounterGame extends Component {
  render() {
    return (
        <div>
            <div style={{height: '100vh', width: '25vw', display: 'inline-block', float: 'left', border: 'solid', borderColor: 'blue'}}>
                <GlobalCounter/>
            </div>
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
            <MapListener/>
        </div>
    );
  }
}
export default ZombieCounterGame;
