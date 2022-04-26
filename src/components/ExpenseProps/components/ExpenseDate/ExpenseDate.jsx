
import './ExpenseDate.css'


//hàm xử lý day, month, year:
const  ExpenseDate = (props)=> {
    const {date} = props
    let month = new Date()
    month = date.toLocaleString('en-US', { month: 'long' });

    let day = new Date()
    day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
  
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
  }
  
  export default ExpenseDate;