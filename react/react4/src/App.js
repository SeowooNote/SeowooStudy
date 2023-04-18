import './App.css';
import TodoHead from './components/todoHead';
import TodoList from './components/todoList';
import TodoTemplate from './components/todoTemplate';
import TodoCreate from './components/todoCreate';


function App() {
  return (
    <>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </>
  );
}

export default App;
