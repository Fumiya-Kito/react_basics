import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isOpen, setIsOpen] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const onChangeIsOpenHandler = () => setIsOpen(!isOpen);

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={onChangeIsOpenHandler}>Add New Expense</button>}
      {isOpen &&<ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onChangeIsOpen={onChangeIsOpenHandler}
      />}
    </div>
  );
}

export default NewExpense;
