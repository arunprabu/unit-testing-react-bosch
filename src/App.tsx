import React from 'react';
import './App.css';
import CompanyInfo from './components/CompanyInfo';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>Welcome to Unit Testing!</h1>

      <CompanyInfo companyName="Bosch" foundedYear="1999" employeesCount="23457"/>

      <Counter />

    </div>
  );
}

export default App;
