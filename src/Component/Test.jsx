import React from 'react'

const Test = ({fname,lname,age,grade}) => {
   
  return (
  <>
    
    <h3>My name is:{fname}</h3>
    <h3>last name:{lname}</h3>
    <h3>My age is:{age}</h3>
    <h3>Grade:{grade}</h3>
    </>
  )
}

export default Test