import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')



    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const handleOnChangeTitle = (event) => {
        setEnteredTitle(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })


        // setUserInput((prevInput) => {
        //     return {...prevInput, enteredTitle: event.target.value}
        // })
    }

    const handleChangeAmount = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })


        // setUserInput((prevInput) => {
        //     return {...prevInput, enteredAmount: event.target.value}
        // })
    }



    const handleChangeDate = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })


        // setUserInput((prevInput) => {
        //     return {...prevInput, enteredDate: event.target.value}
        // })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={handleOnChangeTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        step='0.01'
                        min='0.01'
                        value={enteredAmount}
                        onChange={handleChangeAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2012-02-22'
                        max='2022-12-22'
                        value={enteredDate}
                        onChange={handleChangeDate} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm