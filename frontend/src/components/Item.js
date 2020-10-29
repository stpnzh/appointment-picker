import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAppt, setId } from '../actions'

const Item = (props) => {

  const { _id, patient, datetime} = props.data

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setAppt(datetime));
    dispatch(setId(_id))
  }

  return (
    <>
      {props.data.booked ? 
      <button className='button is-light mx-2'>{props.t}</button> : 
      <button className='button is-primary mx-2' value={props.data.datetime} onClick={handleClick}>{props.t}</button>
      }
    </>

  )
}

export default Item;