import {  BottomNavigation, BottomNavigationAction, Box, Divider } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () =>{
    return(
<Box sx={{ 
    position: 'fixed', 
    bottom: '0',
    width: '100%',


}}>
       <Divider />
      
    <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    
</Box>
    )
}
export{Footer}