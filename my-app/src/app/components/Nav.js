
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <>
  <nav className={styles.navbar}>
   
        <ul className={styles.navbarList}>
<li className={styles.navbarItem}>
<Link href="/">
    Home
</Link>
<Link href="/about">
    about
</Link>
<Link href="/contact">
    contact
</Link>
<Link href="/software">
    Software
</Link>
</li>
        </ul>

  
  
  </nav>
  </>
  )
}

export default Nav