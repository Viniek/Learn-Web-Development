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

    const [firstname,setfirstname]=useState(null)
    const[lastname,setlastname]=useState(null)
    const[emailadress,setemailadress]=useState(null)

    const handleSubmit= e =>{
        e.preventDefault();
        if(firstname.length<4&& !firstname)alert("Enter a valid Firstname")
        console.log(firstname,lastname,emailadress);
    }
  return (
    <div form>
    <form>
    <label htmlFor='firstname'>Firstname</label>
    <input type="text"  id="firstname" onchange={(e)=>setfirstname(e.firstname.value)} />

    <label htmlFor='lastname'>lastname</label>
    <input type="text"  id="lastname" onchange={(e)=>setlastname(e.lastname.value)} />
     
    <label htmlFor='emailaddress'>emailaddress</label>
    <input type="text"  id="emailaddress" onchange={(e)=>setemailadress(e.emailadress.value)} />
    <button onClick={handleSubmit}>submit</button>
    </form>
      </div> 
  )
}

export default Form