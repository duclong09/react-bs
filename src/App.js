import { Box, Stack } from '@mui/material';
import './App.css';
import Expenses from './components/ExpenseProps/Expenses';
import Feed from './components/Header/Feed';
import RightBar from './components/Header/RightBar';
import SideBar from './components/Header/SideBar';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 3, 12),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2022, 3, 20)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 3, 21),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 3, 23),
    },
  ];

  const addExpenseHandler = (expense)=>{
     console.log('In app.js')
     console.log(expense)
  }
  return (
    <Box>
      <Stack direction='row' spacing={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </Box>
  );
}

export default App;
