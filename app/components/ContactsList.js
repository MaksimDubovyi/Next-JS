import { Grid } from "@material-ui/core";
import Contact from "./Contact";


export default  function ContactsList ({contacts}) {

    return(
            <Grid container  spacing={4}>
                <Contact contacts={contacts}></Contact>
            </Grid>   
    )
    }