import React, { useState } from 'react';
import appts from './appts.json'
import Dropdown from './Dropdown';
import DateToggler from './DateToggler';
import Confirm from './Confirm';
import SelfInput from './SelfInput';
import { useSelector, useDispatch } from 'react-redux';
import { selectName, selectAppt, selectDate, setSelf } from '../actions';

const Home = () => {

  const name = useSelector(state => state.name)
  const date = useSelector(state => state.date)
  const self = useSelector(state => state.self)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(selectAppt(e.target.value));
  }

  let newAppts = []
  appts.forEach(i => {
    if (i.time.slice(0,10) === date.toISODate().toString() && i.name === name) {
      newAppts.push(i)
    }
  })

  const buttons = newAppts.map(i => {
    let j = i.time.slice(11,-4)
    let s = parseInt(j.slice(0,2)) < 12 ? 'AM' : 'PM'
    let t;
    if (j.charAt(0) === '0') {
      t = j.slice(1,) + ' ' + s
    } else {
      t = j + ' ' + s
    }
    if (i.booked) {
      return (
        <button class="button is-primary" value={i.time} onClick={handleClick}>{t}</button>
      )
    } else {
      return <button class='button is-light'>{t}</button>
    }
  })

  return (
    <div>
      <h1 className='is-size-1'>Pick your appointment</h1>
      <SelfInput />

      {self ? 'show' : 'dont'}
      <Dropdown />
      <DateToggler />
      <div className='section'>{buttons}</div>
      <Confirm />
    </div>
  )
}

export default Home;