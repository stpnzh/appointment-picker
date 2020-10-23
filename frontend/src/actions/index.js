export const setProvider = (name) => {
  return {
    type: 'PROVIDER_NAME',
    payload: name
  }
}

export const setAppt = (appt) => {
  return {
    type: 'APPT',
    payload: appt
  }
}

export const setDate = (date) => {
  return {
    type: 'DATE',
    payload: date
  }
}

export const setPatient = (name) => {
  return {
    type: 'PATIENT_NAME',
    payload: name
  }
}

export const setId = (id) => {
  return {
    type: 'ID',
    payload: id
  }
}