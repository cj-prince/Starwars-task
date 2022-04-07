import React from 'react'

const Validation = (values) => {
    let errors ={}
    let pattern ="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    if(!values.email){
        errors.email='Email required'
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email='Invalid Email'
    }
    if(!values.password){
        errors.password='Password required'
    }
  return errors
}

export default Validation