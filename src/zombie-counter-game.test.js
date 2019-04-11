import React from 'react';
import ReactDOM from 'react-dom';
import ZombieCounterGame from './zombie-counter-game';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ZombieCounterGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
