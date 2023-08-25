import {Box, Link} from '@mui/material';
// const styles = {
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

const Navigation = () => (
    <Box>
      <Link
        href="/"
        color="inherit"
        underline="none"
        sx={{ml:5}}
        >
        Home
      </Link>
    </Box> 
);

export default Navigation;
