import Image from 'next/image';
import React from 'react';
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';
import Nav from './Nav';
const Header = () => {
  return (
    
        <header className={styles.main_header}>
<div className={styles.navbar_brand}>
    <Link href="/">
    <Image src="/next.svg" width={130} height={20}/>
    </Link>
</div>
<Nav/>
        </header>
       
   
  )
}

export default Header