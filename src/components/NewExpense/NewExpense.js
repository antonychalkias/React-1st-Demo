import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

  const [isEdditing, setIsEdditing] = useState(false);
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  props.onAddExpense(expenseData);
  setIsEdditing(false);
};

const stopEditingHandler = () => {
  setIsEdditing(false);
}

const startEditingHandler = () => {
  setIsEdditing(true);
}
return (
<div className='new-expense'>
  {!isEdditing && <button onClick={startEditingHandler}> Add New Expense</button>}
  {isEdditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel ={stopEditingHandler}/>}
</div>
);
};


export default NewExpense;