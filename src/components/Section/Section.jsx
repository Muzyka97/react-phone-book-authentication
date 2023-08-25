import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';

const Sections = ({title, children}) =>{
    return (  
    <section>
        <Box
          component='div'>
          <Typography
          textAlign='center' 
          variant="h3" 
          gutterBottom
          >{title}</Typography>
          {children}
        </Box>
    </section>)
};
Sections.propTypes ={
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Sections