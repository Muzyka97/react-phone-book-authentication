import {useDispatch, useSelector, shallowEqual} from 'react-redux';
 
import {Link, Box, Avatar} from '@mui/material'

import defaultAvatar from './default-avatar.png';
import Button from 'shared/ButtonShared';

import { logOut } from 'redux/auth/authOperation';
import {getUserName} from '../../redux/auth/authSelectors';

// const styles = {
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       marginLeft: 1050,
//     },
//     avatar: {
//       marginRight: 4,
//     },
//     name: {
//       fontWeight: 700,
//       marginRight: 12,
//     },
//     link: {
//       display: 'inline-block',
//       textDecoration: 'none',
//       padding: 12,
//       fontWeight: 700,
//       color: '#2A363B',
//     },
//     activeLink: {
//       color: '#E84A5F',
//     },
// };

const UserMenu = () =>{
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const name = useSelector(getUserName, shallowEqual);

  return(
    <Box alignItems='center'  display='flex' >
      <Box 
        mr={5} 
        display='flex'
        >
          <Link
            href="/contacts"
            color="inherit"
            underline="none"
          >
          Contacts
          </Link >
      </Box> 

      <Box
        display='flex'
        alignItems='center'
        >
        <Avatar src={avatar} alt="user"/>
        <span >Привіт,{name}!</span>
        <Box 
            component="span"
            sx={{ mr: 5,
                  ml: 5,
                }}
        >
          <Button type={"submit"} onPress={() => dispatch(logOut())}>Вийти</Button>
        </Box>
      </Box>
    </Box>  
  );
};
export default UserMenu;