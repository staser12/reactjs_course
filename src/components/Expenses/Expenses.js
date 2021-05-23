import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2019')

  const selectedYearChangedHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSelectedYearChanged={selectedYearChangedHandler}/>
        <input type="text" value={selectedYear} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  )
}

export default Expenses;