import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../actions';


const DateToggler = () => {

  const date = useSelector(state => state.date);
  const dispatch = useDispatch();

  const addDate = () => {
    dispatch(setDate(date.plus({ days: 1})))
  }
  
  const subtractDate = () => {
    dispatch(setDate(date.minus({ days: 1})))
  }

  return (
    <div className='level'>
      <div className='level-item'>
      <button onClick={subtractDate} className="button is-white"><i className="fas fa-angle-left"></i></button>
      <span>{date.toLocaleString().toString()}</span>
      <button onClick={addDate} className="button is-white"><i className="fas fa-angle-right"></i></button>
      </div>
    </div>
  )
}

export default DateToggler;