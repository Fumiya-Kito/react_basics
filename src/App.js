import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense'

const DUMMY_EXPENSES = [
  { id: '1', title: "Car Insurance", amount: 299.99, date: new Date(2022, 3, 24) },
  { id: '2', title: "Car", amount: 559.99, date: new Date(2022, 3, 24) },
  { id: '3', title: "PC", amount: 449.99, date: new Date(2022, 3, 24) },
  { id: '4', title: "House", amount: 1299.99, date: new Date(2022, 3, 24) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'React Project'),
  //   React.createElement(Expenses, {expenses: expenses})
  // )

  return (
    <div>
      <h2>React Project</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;


