import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatient } from '../actions';


const Form = () => {

  const patient = useSelector(state => state.patient)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 
    // dispatch(setSelf(''));
  }

  return (
    <div>
    Enter name to get started:
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Text input" onChange={e => dispatch(setPatient(e.target.value))}></input>
        <input className='button is-primary is-light' type='submit'></input>
      </form>
    </div>
  )
}

export default Form;