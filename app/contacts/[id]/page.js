"use client";
import Image from 'next/image'
import { getContactsId } from "@/services/getContacts";
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
// export async function generateMetadata({ params: { id } }) {

//     const contact = await getContacts(id);
//     return { title: contact[0].name };
// }


export default  function Contact({ params: { id } }) {
    const [contact, setContacts]= useState([]);

    useEffect(() => {
        getContactsId(id).then(setContacts);
      }, [id]);

    try {
        if (contact.length === 0) {
            return <div className='container'><h1>Contact is not available</h1></div>;
          }
            return (
              <Grid container spacing={5}>
                <Grid item>
                  <Image
                    src="/user.svg"
                    alt="Phone Icon"
                    width={200}
                    height={200}
                  />
                </Grid>

                <Grid item xs={12} sm container>
                  <Grid item>
                    <Typography variant="h3">
                      <strong>{contact[0].name}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      <strong>Login:</strong> {contact[0].login}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">
                      <strong>Phone:</strong> {contact[0].phone}
                    </Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography  variant="h5">
                      <strong>Sex:</strong> {contact[0].sex}
                    </Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography  variant="h5">
                      <strong>Status:</strong> {contact[0].status}
                    </Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography  variant="h5">
                      <strong>Geo:</strong> {contact[0].profile.userGeo.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">
                      <strong>Friend:</strong> {contact[0].description.friend}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">
                      <strong>Love:</strong> {contact[0].description.love}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
        
    } catch (error) {
        console.error('Помилка при отриманні контакту:', error);
      
        return <div className='container'><h1>Error receiving contact</h1></div>;
    }
}

