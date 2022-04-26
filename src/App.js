import { useState } from 'react';
import './App.css';
import Expenses from './components/ExpenseProps/components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Book',
    amount: 94.12,
    date: new Date(2012, 1, 12),
  },
  {
    id: 'e2',
    title: 'Computer',
    amount: 799.49,
    date: new Date(2018, 5, 20)
  },
  {
    id: 'e3',
    title: 'BMW',
    amount: 294.67,
    date: new Date(2021, 3, 21),
  },
  {
    id: 'e4',
    title: 'I mac',
    amount: 420,
    date: new Date(2022, 12, 23),
  },
  {
    id: 'e5',
    title: 'Car',
    amount: 460,
    date: new Date(2022, 9, 24),
  },
  {
    id: 'e6',
    title: 'New Desk (Wooden)',
    amount: 150,
    date: new Date(2022, 7, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    console.log('expense', expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
