import Link from 'next/link'
import React from 'react'
import SoftwareCard from '../components/SoftwareCard';
import styles from "@/app/styles/common.module.css"
import { resolve } from 'styled-jsx/css';
const page =async() => {

 
    const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '29f7db91c6msh42d7ecce07b26a3p1cea0ejsnb83af1f7b42f',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res=await fetch(url,options);
const data= await res.json();
// console.log(data);
const m_data=data.titles;
  return (
    <>
    <section className={styles.movieSection}>
        <div className={styles.container}>
        <h1>Softwares To Download</h1>
        <div className={styles.card_section}>
   {
    m_data.map((elem)=>{
        return <SoftwareCard key={elem.id} {...elem}/>

    })
   }</div>
        </div>
    </section>
   
    </>
  )
}

export default page