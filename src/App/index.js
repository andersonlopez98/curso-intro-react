import React from 'react';
// import './App.css';
// import { defaultTodos } from '../Data'
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';

function App() {


  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
};

export default App;
