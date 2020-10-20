import React, { useState } from 'react';




const appts = [
  {
    time: '2020-10-20T08:00:00Z',
    booked: true
  },
  {
    time: '2020-10-20T08:30:00Z',
    booked: false
  },
  {
    time: '2020-10-20T09:00:00Z',
    booked: false
  },
  {
    time: '2020-10-20T09:30:00Z',
    booked: true
  }
]



const Home = () => {

  const [appt, setAppt] = useState('');

  const handleClick = (e) => {
    setAppt(e.target.value);

  }

  const handleClick2 = (e) => {
    setAppt('');

  }

  const buttons = appts.map(i => {
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
      return <button class='button' onClick={handleClick2}>{t}</button>
    }
  })

  const da = new Date()

  return (
    <>
      <div>
        <h1 class='is-size-1'>Pick your appointment</h1>
        <button class="button is-primary">You can pick these times</button>
        <button class="button">You can't pick these times</button>
      </div>
      {buttons}
      <div>
        {appt ? <><div>You've selected {appt}</div> <button class='button is-warning'>Confirm</button><button class='button is-danger'>Reset</button></> : ''}
      </div>
      

    </>
  )
}

export default Home;