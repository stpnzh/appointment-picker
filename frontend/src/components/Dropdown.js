import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProvider, setAppt } from '../actions';


const Dropdown = () => {

  // Use the name reducer
  const provider = useSelector(state => state.provider)
  const dispatch = useDispatch();

  const handleNameClick = (e) => {
    dispatch(setProvider(e.target.value));
    dispatch(setAppt(''));
  }

  return (
      <div className="control">
        <div className="select">
          <select value={provider} onChange={handleNameClick}>
            <option value='' selected disabled hidden>Choose your provider</option>
            <option onClick={handleNameClick}>Joseph Joestar</option>
            <option onClick={handleNameClick}>Jotaro Kujo</option>
            <option onClick={handleNameClick}>Caesar Zeppeli</option>
          </select>
        </div>
      </div>
  )
}

export default Dropdown;