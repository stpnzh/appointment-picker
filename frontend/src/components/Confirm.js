import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAppt, setProvider, setPatient, setId } from '../actions';


const Confirm = (props) => {

  const [submit, setSubmit] = useState(false);

  const appt = useSelector(state => state.appt);
  const patient = useSelector(state => state.patient);
  const provider = useSelector(state => state.provider);
  const id = useSelector(state => state.id);
  const dispatch = useDispatch();

  // This will send a PATCH request
  const handleConfirmClick = async () => {
    await fetch(`http://localhost:5000/api/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        patient: patient
      })
    })
    props.fetchData();
    dispatch(setProvider(''));
    dispatch(setPatient(''));
    dispatch(setId(''));
    dispatch(setAppt(''));
    setSubmit(!submit);
  }

  const handleResetClick = (e) => {
    dispatch(setAppt(''));
  }


  let output;

  if (submit) {
    output =       
    <div>
      Successfully submitted!
      <div>
        <button className='button is-primary is-light'>Back to Home</button>
        <button className='button is-primary is-light'>Book another</button>
      </div>
    </div>

  } else {
    output = 
    <div className='p-5'>
      {appt ? 
      <>
        <div className='p-2'>
          You've selected <strong>{provider}</strong> at {appt}
        </div> 

        <button className='button is-warning mx-2' onClick={handleConfirmClick}>Confirm</button>
        <button className='button is-danger mx-2' onClick={handleResetClick}>Cancel</button>
      </>
       : 
      ''}
    </div>
  }
  
  return (
    <div>
      {output}
    </div>
  )
}

export default Confirm;