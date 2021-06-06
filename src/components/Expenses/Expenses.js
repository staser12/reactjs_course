import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2019')

  const selectedYearChangedHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
  }

  const newFilteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectedYearChanged={selectedYearChangedHandler}
        />
        <ExpensesChart expenses={newFilteredExpenses}/>
        <ExpensesList items={newFilteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;