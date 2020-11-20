import './App.scss';
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Todo List</h1>
      <Form />
    </div>
  );
}

export default App;
