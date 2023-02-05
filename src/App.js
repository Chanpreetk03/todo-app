import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} alt="logo" width={100} height={100} className="logo" />
      <h1 className='app-title'>TODO-APP</h1>
      <div className='container'>
        Add an item
        <br />
        <input type="text" className='input-text' placeholder='enter your todo' />
        <button className='add-btn'> Add this todo</button>
        <div className='list'>
          <ul>
            <li>
              <input type="check" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
