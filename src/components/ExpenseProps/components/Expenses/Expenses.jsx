import { useState } from "react";
import Card from "../../../Card/Card";
import ExpensesFilter from "../../../ExpensesFilter/ExpensesFilter";
import ExpenseList from "../ExpenseList/ExpenseList";

import './Expenses.css'

const Expenses = (props) => {
  const { items } = props
  const [filteredYear, setFilterYear] = useState('2012')

  const handleChangeFilter = (selectYear) => {
    setFilterYear(selectYear)
  }

  //filter fullYear
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={handleChangeFilter} />
      <ExpenseList items={filteredExpenses}/>
      {/* {filteredExpenses.length === 0 ?
        (<p className="expenses-title">No expenses found.</p>)
        : (filteredExpenses.map(item => (<ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />)))} */}


    </Card>
  );
}

export default Expenses;