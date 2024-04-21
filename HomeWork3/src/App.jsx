import React, { useState } from 'react';
import './App.css'
import List from './components/List'

function App() {
  const [hide, setHide] = useState(false);

  const toggle = () => {
    setHide(!hide);
  }

  return (
    <>
      <div className='main'>
        <button className='button' onClick={toggle}>
          {hide ? 'Показать' : 'Скрыть'}
        </button>
        <div>
          {hide ? null : <List/>} 
        </div>
      </div>
    </>
  )
}

export default App
