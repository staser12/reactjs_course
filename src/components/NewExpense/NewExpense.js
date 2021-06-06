import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  let addExpenseContent = <button className="new-expense__actions" onClick={startEditingHandler}>Add Expense</button>

  if (isEditing) {
    addExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
  }

  return <div className="new-expense">
    {addExpenseContent}
  </div>
}


export default NewExpense;