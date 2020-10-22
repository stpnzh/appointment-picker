import React, { useState } from 'react';
import Confirm from './Confirm';
import { useSelector, useDispatch } from 'react-redux';
import { selectName, selectAppt, selectDate, setSelf } from '../actions';


const SelfInput = () => {

  const self = useSelector(state => state.self)
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
        <input className="input" type="text" placeholder="Text input" onChange={e => dispatch(setSelf(e.target.value))}></input>
        <input className='button is-primary' type='submit'></input>
      </form>
    </div>
  )
}

export default SelfInput;