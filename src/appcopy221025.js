import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import TodoList from './components/TodoList/TodoList';
import UserDirectory from './components/UserDirectory/UserDirectory';
import ThemeContext from './context/ThemeContext';

function App() {
  const {theme} = React.useContext(ThemeContext);
  return (
   <div className={`App ${theme}`}>
      <Header />
      <main>
        <TodoList />
        <UserDirectory />
      </main>
    </div>
  );
}

export default App;
