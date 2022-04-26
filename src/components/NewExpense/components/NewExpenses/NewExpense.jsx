import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enterExpenseData)=>{
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    console.log(expenseData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

    </div>
  )
}

export default NewExpenses