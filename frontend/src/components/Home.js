import React, { useState } from 'react';
import Dropdown from './Dropdown';
import DateToggler from './DateToggler';
import Confirm from './Confirm';
import Form from './Form';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { setProvider, setAppt, setDate, setPatient } from '../actions';

const Home = (props) => {

  const [submit, setSubmit] = useState(false);

  const provider = useSelector(state => state.provider)
  const date = useSelector(state => state.date)
  const patient = useSelector(state => state.patient)
  const dispatch = useDispatch();

  let newAppts = []
  props.data.forEach(i => {
    if (i.datetime.slice(0,10) === date.toISODate().toString() && i.provider === provider) {
      newAppts.push(i)
    }
  })

  const apptsArray = newAppts.map(i => {
    let time = i.datetime.slice(11,16)
    let meridiem = parseInt(time.slice(0,2)) < 12 ? 'AM' : 'PM'
    let formattedTime;
    if (time.charAt(0) === '0') {
      formattedTime = time.slice(1,) + ' ' + meridiem
    } else {
      formattedTime = time + ' ' + meridiem
    }
    return <Item data={i} t={formattedTime} fetchData={props.fetchData}/>
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(!submit);
  }

  const handleChange = (e) => {
    dispatch(setPatient(e.target.value));
  }


  return (
    <div className='p-5'>
      <h1 className='is-size-1'>Pick your appointment</h1>
      {/* <Form /> */}
      <div className='container is-max-desktop'>
        <div className='p-3'>Enter your name to get started:</div>
        <form onSubmit={handleSubmit}>
          <input className='input' type="text" placeholder='Name' onChange={handleChange} style={{ width: `40%` }}/>
          <div className='p-3'>
            <input className='button is-link' type='submit'></input>
          </div>
        </form>
      </div>

      {patient && submit ?
      <div className='pt-4'>
        <div className='pb-3'><Dropdown /></div>
        <DateToggler />
        <div>{apptsArray}</div>
        <Confirm fetchData={props.fetchData}/>
      </div>
      :
      <div></div>
      }
    </div>
  )
}

export default Home;