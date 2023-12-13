'use client';

import { getContactsBySearch } from "@/services/getContacts";
import { useState } from "react";
import styles from './styles/styles.search.module.css'; 
const ContactSearch = ({onSearch}) =>{
const [search, setSearch]= useState('');

const handleSubmit =async(e)=>{
e.preventDefault();
const contacts = await getContactsBySearch(search);

onSearch(contacts);
}

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} for="search">Search: </label>
            <input type="search"
            id="search"
            placeholder="search"
            value={search}
            onChange={(event)=>setSearch(event.target.value)}
            className={styles.search}
            />
          <button className={styles.button} type="submit">Search</button>
        </form>
    )
}

export {ContactSearch};