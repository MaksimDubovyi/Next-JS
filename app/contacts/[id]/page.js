import Link from "next/link";
import Image from 'next/image'
import style from './styles.module.css'

 async function getContacts(id) {
try
{
    const response = await fetch(`https://next-js-one-henna.vercel.app/api/contacts/?contact=${id}`, {
        next: {
            revalidate: 250
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
 
    return response.json();
}
catch{
    return null
}
  
}

export async function generateMetadata({ params: { id } }) {

    const contact = await getContacts(id);
    return { title: contact[0].name };
}


export default async function Contact({ params: { id } }) {

    try {
        const contact = await getContacts(id);

            return (

                <div className={style.userContainer}>
                    <h1>- {contact[0].name} -</h1>
          
                    <div className={style.contentBlock}> 
                        <div className="content">
                            <Image  src="/user.svg" alt="Phone Icon" width={200} height={200} />
                        </div> 
                   
                        <div className={style.content}>
                            <p><strong>1. phone: </strong> {contact[0].phone}</p>
                            <p><strong>2. sex: </strong> {contact[0].sex}</p>
                            <p><strong>3. login:</strong> {contact[0].login}</p>
                            <p><strong>4. status:</strong> {contact[0].status}</p>
                            <p><strong>5. userGeo:</strong> {contact[0].profile.userGeo.name}</p>
                            <p><strong>6. love: </strong>  {contact[0].description.love}</p>
                            <p><strong>7. friend:</strong> {contact[0].description.friend}</p>
                        </div>
      
                    </div>

               
               
                </div>
            );
        
    } catch (error) {
        console.error('Помилка при отриманні контакту:', error);
      
        return <div className='container'><h1>Error receiving contact</h1></div>;
    }
}

