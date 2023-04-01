import React from 'react';
import './App.css';
import Counter from './component/counter';
import Input from './component/input';
import MultiInput from './component/multiinput'

function App() {
  return (
    <>
      <Counter/>
      <br/><br/>
      <Input/>
      <br/><br/>
      <MultiInput/>
    </>
  );
}

export default App;
