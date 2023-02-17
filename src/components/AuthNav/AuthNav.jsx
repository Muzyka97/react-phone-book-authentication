import { NavLink } from 'react-router-dom';

const styles = {
  container:{
    marginLeft: 1050,
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

const AuthNav = () => {
    return(
        <div style={styles.container}>
      <NavLink
        to="/register"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Реєстрація
      </NavLink>
      <NavLink
        to="/login"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Логін
      </NavLink>
    </div>
    )
};

export default AuthNav;