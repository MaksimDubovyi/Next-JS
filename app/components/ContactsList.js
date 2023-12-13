import Image from "next/image";
import Link from "next/link";
import styles from './styles/styles.contactslist.module.css'; 

export default  function ContactsList ({contacts}) {

    return(
            <div className={styles.containerRow} >
                {contacts.map((contact)=>(
                <div className={styles.userCard} key={contact._id.$oid}>
                   <p><Image  src="/user.svg" alt="Phone Icon" width={20} height={20} /> {contact.name}</p>
                   <p><Image  src="/phone.svg" alt="Phone Icon" width={20} height={20} /> {contact.phone}</p>
                   <p><Image  src="/gender.svg" alt="Phone Icon" width={20} height={20} />  {contact.sex}</p>
                   <p><Image  src="/log.svg" alt="Phone Icon" width={20} height={20} /> {contact.login}</p>
                    <Link className={styles.linkVisit} href={`/contacts/${contact._id.$oid}`}>Open <Image  src="/arrow.svg" alt="Phone Icon" width={120} height={20} /></Link>
                </div>
            ))}
            </div>   
    )
    }