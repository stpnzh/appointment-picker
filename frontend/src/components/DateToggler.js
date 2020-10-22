import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate } from '../actions';


const DateToggler = () => {

  const date = useSelector(state => state.date);
  const dispatch = useDispatch();

  const addDate = () => {
    dispatch(selectDate(date.plus({ days: 1})))
  }
  
  const subtractDate = () => {
    dispatch(selectDate(date.minus({ days: 1})))
  }

  return (
    <div className='level' style={{width: `10%`}}>
      <div className='level-item'>
      <button onClick={subtractDate} className="button is-white"><i className="fas fa-angle-left"></i></button>
      <span>{date.toLocaleString().toString()}</span>
      <button onClick={addDate} className="button is-white"><i className="fas fa-angle-right"></i></button>
      </div>
    </div>
  )
}

export default DateToggler;