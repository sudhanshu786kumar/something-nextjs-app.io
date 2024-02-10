'use client'

import React, { useState } from 'react'
import styles from "@/app/contact/contact.module.css";
//zJYi5fN6Ceexf0L2
//sudhanshu786kumar
//mongodb+srv://sudhanshu786kumar:<password>@cluster0.y2wpb0i.mongodb.net/?retryWrites=true&w=majority
const ContactForm = () => {
    const[user,setUser]=useState({
        username:'',
        email:'',
        phone:'',
        message:''
    });
    const [status, setStatus] = useState(null);
const handleChange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setUser((prevValue)=>({
...prevValue,[name]:value
}))
}

// (async () => {
//     const resp=await fetch('/api/contact',{
//         method:'GET',
//         headers:{"Content_Type":"application/json"}
       
//     })
//     console.log(resp)
//   })();


const handleSubmit=async(e)=>{
    e.preventDefault()
try {
    const resp=await fetch('/api/contact',{
        method:'POST',
        headers:{"Content_Type":"application/json"},
        body:JSON.stringify({
            username:user.username,
            email:user.email,
            phone:user.phone,
            message:user.message
        })
    })
    console.log(resp)
    //
      // Set the status based on the response from the API route
      if (resp.status === 200) {
        setUser({
            username: "",
            email: "",
            phone: "",
            message: ""
        })
        setStatus('success');
    } else {
        setStatus('error');
    }
} catch (error) {
    
}
}
    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_fields}>
                <label htmlFor='username' className={styles.label}>
                    Username:
                    <input  onChange={handleChange} value ={user.username}type='text' name='username' id='usrname'
                        placeholder='enter pls' />
                </label>

            </div>
            <div className={styles.input_fields}>
                <label htmlFor='email' className={styles.label}>
                    Username:
                    <input onChange={handleChange} value={user.email} type='text' name='email' id='email'
                        placeholder='enter pls' />
                </label>

            </div>
             <div className={styles.input_fields}>
                <label htmlFor='phone' className={styles.label}>
                    Username:
                    <input onChange={handleChange} value={user.phone} type='text' name='phone' id='phone'
                        placeholder='enter pls' />
                </label>

            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea name="message" id="message" rows={5}
                        placeholder="Enter your Message"
                     
                        value={user.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
           
                </div>
                <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" >Send Message</button>
            </div>
        </form>
    )
}

export default ContactForm