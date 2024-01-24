import {Box, Link} from '@mui/material'
// const styles = {
//   container:{
//     marginLeft: 1050,
//   },
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

const AuthNav = () => {
    return(
        <Box>
      <Link
        href="/register"
        color="inherit"
        underline="none"
        mr={5}
      >
        Реєстрація
      </Link>
      <Link
        mr={5}
        href="/login"
        underline="none"
        color="inherit"
      >
        Логін
      </Link>
    </Box>
    )
};

export default AuthNav;