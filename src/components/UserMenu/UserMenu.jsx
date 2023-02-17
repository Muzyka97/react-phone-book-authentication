import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { NavLink } from 'react-router-dom';

import defaultAvatar from './default-avatar.png';
import Button from 'shared/Button';

import { logOut } from 'redux/auth/authOperation';
import {getUserName} from '../../redux/auth/authSelectors';

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 1050,
    },
    avatar: {
      marginRight: 4,
    },
    name: {
      fontWeight: 700,
      marginRight: 12,
    },
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
    activeLink: {
      color: '#E84A5F',
    },
};

const UserMenu = () =>{
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const name = useSelector(getUserName, shallowEqual);

    return(
        <div style={styles.container}>
          <NavLink
            to="/contacts"
            style={styles.link}
            activestyle={styles.activeLink}
          >
           Contacts
           </NavLink>

          <img src={avatar} alt="" width="32" style={styles.avatar} />
          <span style={styles.name}>Привіт,{name}!</span>
          <Button type={"submit"} onPress={() => dispatch(logOut())}>Вийти</Button>
        </div>
    );
};
export default UserMenu;