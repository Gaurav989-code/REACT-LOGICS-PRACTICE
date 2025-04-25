import React from 'react'

const FormSubmitted = (props) => {

    const {formData} = props


  return (
    <div className="">
          <h1>Success!</h1>
          <hr />
          <span>Name: {formData.name}</span>
          <br />
          <span>DOB: {formData.dob}</span>
          <br />
          <span>Email: {formData.email}</span>
          <br />
          <span>Password: {formData.password}</span>
        </div>
  )
}

export default FormSubmitted
