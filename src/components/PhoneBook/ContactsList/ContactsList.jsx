import PropTypes from 'prop-types'; 
import {Box, List, ListItem} from '@mui/material';
// import styled from 'styled-components';

import Button from 'shared/ButtonShared';

// const List = styled.li`
//     margin-top: ${p=>p.theme.space[3]}px;
// `
const ContactsList = ({contacts,deleteContacts}) =>{

    const contact = contacts.map(({id, name, number})=>(
        <ListItem 
            sx={{
                mb: 1,
            }}
            disablePadding 
            key={id}> {name}: {number} 
            <Box
                m='auto'   
                component="span"
                sx={{
                    ml:5,
                }} 
                >
                <Button type={"submit"} onPress={()=>deleteContacts(id)}>Видалити</Button>
            </Box>
        </ListItem>
    ));
    return (
        <Box                
            display='flex' 
            justifyContent="center" >
            <List
                disablePadding
                sx={{ 
                    width: '100%',
                    maxWidth: 360,
                    mt: 1,
                    mb: 1,
                }}
            >{contact}</List>
        </Box>
    );
};
ContactsList.propTypes = {
    deleteContacts: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
};
export default ContactsList;