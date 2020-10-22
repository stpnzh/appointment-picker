import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAppt } from '../actions';


const Confirm = () => {

  const appt = useSelector(state => state.appt);
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  const resetSelection = (e) => {
    dispatch(selectAppt(''));
  }
  
  return (
    <div>
      {appt ? <><div>You've selected {name} at {appt}</div> <button class='button is-warning'>Confirm</button><button class='button is-danger' onClick={resetSelection}>Reset</button></> : ''}
    </div>
  )
}

export default Confirm;