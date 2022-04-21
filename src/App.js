import React from 'react';
import './App.scss'

import Bill from './components/Bill';
import Totals from './components/Totals'

function App() {
  return (
    <div className='main'>
      <div className='app-title'>
        <p>S P L I</p>
        <p>T T E R</p>
      </div>

      <div className='app-container'>
        <Bill />
        <Totals />
      </div>
    </div>
  );
}

export default App;
