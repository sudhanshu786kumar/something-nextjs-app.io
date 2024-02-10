import stylea from "@/app/contact/contact.module.css";
import {MdEmail} from "react-icons/md"
import React from 'react'
import Link from "next/link";

const ContactCard = () => {
   
    return (
        <div className={stylea.section}>

            <div className={stylea.container}>
                <div className={stylea.grid}>
                    <div className={stylea.grid_card}>
                        <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={stylea.last_para}>response time: 72 hours </p>
                        <Link href="/">  Send Email <span>-&gt;</span></Link>
                    </div>
                    <div className={stylea.grid_card}>
                        <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={stylea.last_para}>response time: 72 hours </p>
                        <Link href="/">  Send Email <span>-&gt;</span></Link>
                    </div>
                    <div className={stylea.grid_card}>
                        <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className={stylea.last_para}>response time: 72 hours </p>
                        <Link href="/">  Send Email <span>-&gt;</span></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactCard