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
    <>
    </>

  )
}

export default Form;