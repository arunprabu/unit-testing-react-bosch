import './App.css';
import CompanyInfo from './components/CompanyInfo';
import Counter from './components/Counter';
import Blog from './components/Blog';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <h1>Welcome to Unit Testing!</h1>

      <CompanyInfo
        companyName="Bosch"
        foundedYear="1999"
        employeesCount="23457"
      />

      <br />
      <hr />
      <Counter />

      <br />
      <hr />
      <Blog />

      <br/>
      <hr/>
      <TodoList />
    </div>
  );
}

export default App;
