import React, { useState } from 'react';
import appts from './appts.json'
import { DateTime } from 'luxon';
import Dropdown from './Dropdown';


const Home = () => {


  let today = DateTime.local() //.toLocaleString()

  const [appt, setAppt] = useState('');
  const [date, setDate] = useState(today)
  const [provider, setProvider] = useState('')

  const [active, setActive] = useState(false)

  const clickDropdown = () => {
    setActive(!active);
  }

  const handleClick = (e) => {
    setAppt(e.target.value);

  }

  const handleClick2 = (e) => {
    setAppt('');

  }



  let newAppts = []
  appts.forEach(i => {
    if (i.time.slice(0,10) === date.toISODate().toString() && i.name === provider) {
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
      return <button class='button is-light' onClick={handleClick2}>{t}</button>
    }
  })

  const handleDateClick = () => {
    setDate(date.plus({ days: 1 }));
    setAppt('');
  }
  
  const subtractDate = () => {
    setDate(date.minus({ days: 1 }));
    setAppt('');
  }

  const chooseProvider = (e) => {
    setProvider(e.target.value);
    setAppt('');
  }

  return (
    <>
      <div>
        <h1 className='is-size-1'>Pick your appointment</h1>
        
        <div className={"dropdown" + (active ? " is-active" : "")} onClick={clickDropdown}>
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>{provider ? provider : 'Choose'}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <option class="dropdown-item" onClick={chooseProvider}>Joseph Joestar</option>
              <option class="dropdown-item" onClick={chooseProvider}>Jotaro Kujo</option>
              <option class="dropdown-item" onClick={chooseProvider}>Caesar Zeppeli</option>

            </div>
          </div>
        </div>


        <div>
          <button onClick={subtractDate} className="button is-small"><i className="fas fa-angle-left"></i></button>
           {date.toLocaleString().toString()} 
           <button onClick={handleDateClick} className="button is-small"><i className="fas fa-angle-right"></i></button>
        </div>

      </div>
      <div className='section'>{buttons}</div>
      <div>
        {appt ? <><div>You've selected {provider} at {appt}</div> <button class='button is-warning'>Confirm</button><button class='button is-danger' onClick={handleClick2}>Reset</button></> : ''}
      </div>
      

    </>
  )
}

export default Home;