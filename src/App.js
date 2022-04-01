import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense'

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 299.99, date: new Date(2022, 3, 24) },
    { title: "Car", amount: 559.99, date: new Date(2022, 3, 24) },
    { title: "PC", amount: 449.99, date: new Date(2022, 3, 24) },
    { title: "House", amount: 1299.99, date: new Date(2022, 3, 24) },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'React Project'),
  //   React.createElement(Expenses, {expenses: expenses})
  // )

  return (
    <div>
      <h2>React Project</h2>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;


