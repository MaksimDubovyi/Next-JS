import { Box, Button, Card, CardHeader, Grid } from "@mui/material";
import Link from "next/link";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green} from '@mui/material/colors';
import FaceIcon from '@mui/icons-material/Face';



export default  function Contact ({contacts})
{

    return (
      <>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={contact._id.$oid}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={contact.login}
                subheader={contact.sex}
              />

              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton aria-label="add to favorites">
                    <FaceIcon />
                  </IconButton>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginLeft: "10px" }}
                  >
                    {contact.name}
                  </Typography>
                </Box>
                <Box  sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton aria-label="add to favorites" >
                    <LocalPhoneIcon  />
                  </IconButton>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginLeft: "10px" }}
                  >
                    {contact.phone}
                  </Typography>
                </Box>
                <Link  href={`/contacts/${contact._id.$oid}`} style={{display:'inline-block', textDecoration:'none',color:'black'}}>
                  <Button  variant="contained" size="medium" color="secondary">Open</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </>
    );
}

