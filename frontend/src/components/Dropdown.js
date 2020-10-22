import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectName, selectAppt } from '../actions';


const Dropdown = () => {

  // Use the name reducer
  const name = useSelector(state => state.name)
  const dispatch = useDispatch();

  const handleNameClick = (e) => {
    dispatch(selectName(e.target.value));
    dispatch(selectAppt(''));
  }

  return (
      <div className="control">
        <div className="select">
          <select value={name} onChange={handleNameClick}>
            <option value='' selected disabled hidden>Choose here</option>
            <option onClick={handleNameClick}>Joseph Joestar</option>
            <option onClick={handleNameClick}>Jotaro Kujo</option>
            <option onClick={handleNameClick}>Caesar Zeppeli</option>
          </select>
        </div>
      </div>
  )
}

export default Dropdown;