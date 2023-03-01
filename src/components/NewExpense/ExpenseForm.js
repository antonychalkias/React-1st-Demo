import React ,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {






  const [enteredTitle,setEnteredTitle] = useState('');

  const titleChangeHandler = ( event ) =>{
    setEnteredTitle(event.target.value);
  };

  const [enteredAmmount,setEnteredAmmount] = useState('');

  const ammountChangeHandler = ( event ) =>{
    setEnteredAmmount(event.target.value);
  };

  const [enteredDate,setEnteredDate] = useState('');

  const dateChangeHandler = ( event ) =>{
    setEnteredDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title:enteredTitle,
      date: new Date(enteredDate),
      ammount: enteredAmmount
    };
      
      props.onSaveExpenseData(expenseData);

      setEnteredTitle('');
      setEnteredDate('');
      setEnteredAmmount('');
    };


  return (

    <form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' value={enteredAmmount} min='0.01' step='0.01' onChange={ammountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' value={enteredDate} min='2020-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>New Expense</button>
			</div>
		</form>
	
  );
};

export default ExpenseForm;
