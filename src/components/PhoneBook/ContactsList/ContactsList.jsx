import PropTypes from 'prop-types'; 
import styled from 'styled-components';

import Button from 'shared/Button';

const List = styled.li`
    margin-top: ${p=>p.theme.space[3]}px;
`
const ContactsList = ({contacts,deleteContacts}) =>{

    const contact = contacts.map(({id, name, number})=>(
        <List key={id}> {name}: {number} 
            <Button type={"submit"} onPress={()=>deleteContacts(id)}>Видалити</Button>
        </List>
    ));
    return (
        <ul>{contact}</ul>
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