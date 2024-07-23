import React, { useState } from 'react'
import './App.css';
import InputField from './InputField/InputField'
import Todo from './Todo/Todo';


const App = () => {

  const [register, setRegister] = useState({
    firstName: '',
    lastName : '',
    email : '',
    password : '',
    confirmPassword : '',
    phone : '',
    occupation : '',
  })

  const [records, setRecords] = useState([])

  const handleSubmit = () => {
    setRecords([...records, {register}])
    setRegister({
      firstName: '',
    lastName : '',
    email : '',
    password : '',
    confirmPassword : '',
    phone : '',
    occupation : '',
    })
    
  }


  return (
    <>
    <div className='main'>
      <div className="Register">
        <h1>Registration Form</h1>
      <div className='Form'>
      <InputField value={register.firstName} onchange={(e) => setRegister({...register, firstName:e.target.value})} label='Enter Your First Name' placeholder = 'John' type='text'/>
      <InputField value={register.lastName} onchange={(e) => setRegister({...register, lastName:e.target.value})} label='Enter Your Last Name' placeholder = 'Doe' type='text'/>
      <InputField value={register.email} onchange={(e) => setRegister({...register, email:e.target.value})} label='Enter Your email' placeholder = 'example@gmail.com' type='email'/>
      <InputField value={register.password} onchange={(e) => setRegister({...register, password:e.target.value})} label='Enter Your Password' placeholder = 'Type Password' type='password'/>
      <InputField value={register.confirmPassword} onchange={(e) => setRegister({...register, confirmPassword:e.target.value})} label='Confirm Password' placeholder = 'Re-type Password' type='password'/>
      <InputField value={register.phone} onchange={(e) => setRegister({...register, phone:e.target.value})} label='Enter Your Cell number' placeholder = '+92 312 3456789' type='number'/>
      <InputField value={register.occupation} onchange={(e) => setRegister({...register, occupation:e.target.value})} label='Enter Your Occupation' placeholder = 'job/business' type='text'/>

      <button onClick={handleSubmit}>Submit</button>
      </div>

      <table border='1'>
        <thead>
          <tr>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Occupation</td>
          </tr>
        </thead>
        <tbody>
          {
          records.map((items, id) => {
            return(
              <tr key={id}>
                <td>{items.register.firstName}</td>
                <td>{items.register.lastName}</td>
                <td>{items.register.email}</td>
                <td>{items.register.phone}</td>
                <td>{items.register.occupation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      <div className="todo">
        <Todo/>
      </div>
    </div>
    </>
  )
}

export default App
