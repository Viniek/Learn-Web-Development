import React ,{useState} from 'react'
import {useFormik} from 'formik';

function Form() {

const formik=useFormik({
  initialValues:{
    firstname:null,
    lastname:null,
    emailadress:null
  }
})
console.log(formik.values)

  
    const handleSubmit= e =>{
        e.preventDefault();
        if(firstname.length<4&& !firstname)alert("Enter a valid Firstname")
        console.log(firstname,lastname,emailadress);
    }
  return (
    <div form>
    <form>
    <label htmlFor='firstname'>Firstname</label>
    <input type="text" name='firstname'  id="firstname"  value={formik.values.firstname} onchange={formik.handleChange}/>

    <label htmlFor='lastname'>lastname</label>
    <input type="text"  name='lastname' id="lastname" value={formik.values.lastname}  onchange={formik.handleChange}/>
     
    <label htmlFor='emailaddress'>emailaddress</label>
    <input type="text" name='emailaddress' id="emailaddress" value={formik.values.emailadress} onchange={formik.handleChange}/>
    <button onClick={handleSubmit}>submit</button>
    </form>
      </div> 
  )
}

export default Form