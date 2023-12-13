
'use client';
import Link from "next/link";
import Image from 'next/image'
import { useEffect, useState } from "react";
import {getContacts} from '@/services/getContacts'
import ContactsList from "../components/ContactsList";
import {ContactSearch} from "../components/ContactSearch";




export default  function Contacts () {

const [contacts, setContacts]= useState([]);

useEffect(()=>{
    getContacts().then(setContacts);
},[]);

return(
    <div className='container'>
    <h1>Contacts</h1>
        <ContactSearch onSearch={setContacts}/>
        <ContactsList contacts={contacts}/>
   


    </div>
)
}