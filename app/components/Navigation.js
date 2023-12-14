'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './styles/styles.navigation.module.css'; 
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { AppBar, Box, IconButton,  Toolbar, Typography } from "@material-ui/core"
import { styled } from '@mui/system';
import { green } from "@mui/material/colors";


const CenteredToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-evenly',
    
  });

const Navigation = ({ navLinks }) => {
    const pathname = usePathname();
    const rating =5;
    return (

        <Box sx={{ 
            flexGrow: 1,
            display:'flex',
            justifyContent: 'space-evenly',
        
        
        }}  >
            <AppBar position="fixed"    >
                <CenteredToolbar sx={{ bgcolor: green[600] }}>
                    <Toolbar >
                       {navLinks.map((link) => {
                           const img=     HomeIcon;
                           const isActive = pathname === link.href;
                           const linkClasses = isActive ? `${styles.link} ${styles.active}` : styles.link;
                           return (

                               <Link key={link.label} href={link.href}
                                    className={linkClasses}>
                                    <IconButton   color="default" aria-label="add an alarm">
                                         {link.label === 'Home' && <HomeIcon />}
                                         {link.label === 'Contacts' && <ImportContactsIcon />}
                                         {link.label === 'About' && <InfoIcon />}
                                         <Typography style={{ color: 'white', marginLeft:'5px' }} variant="h5">
                                          {link.label}
                                        </Typography>
                                   </IconButton>

                               </Link>
                           );
                       })}
                    </Toolbar>
                </CenteredToolbar>
            </AppBar>
      </Box>

        
    );
};

export { Navigation };