import React from 'react';
import { render } from 'react-dom';
import GameBoard from './GameBoard';
import blockCSS from './block.css';

const styles = {
  fontFamily: 'sans-serif'
};

const App = () => (
  <div style={styles}>
    <GameBoard/>
  </div>
);

render(<App />, document.getElementById('root'));
