import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/sliceFilter';
import { useEffect } from 'react';

import Form from "./Form";
import ContactsList from "./ContactsList";
import Filter from "./Filter/Filter";
import Section from "components/Section";
import {Box} from '../Box/Box';

import { addContacts, deleteContacts, fetchContacts } from '../../redux/contacts/operation';


const PhoneBook = () =>{
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
  
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchContacts())
    },[dispatch])

    const addContact = data => {
        const dublicate = contacts.length > 0 ? contacts.find(contact=> contact.name === data.name) : false;
        if(dublicate){
            alert(`${data.name} is already in name list`);
            
        return
        }
        dispatch(addContacts(data))
    };

    const deleteContact = (id) =>  dispatch(deleteContacts(id))
    
    const changeFilter = ({target}) => dispatch(setFilter(target.value ));

    const getFilteredContacts = () =>{
        const filterText = filter.toLowerCase();
        const filterContacts = contacts.filter(({ name }) => {
        const result = name.toLowerCase().includes(filterText);
            return result
        })
    return filterContacts;
    };

    return(
        <Box
        ml='20px'
        mt='20px'
        width='550px'>
            <Section title="PhoneBook">
                <Box
                border={'normal'}
                paddingLeft='8px'
                paddingRight='40px'
                paddingTop='8px'
                paddingBottom="20px">
                    <Form onSubmit={addContact}/>
                </Box>
            </Section>
            <Section title='Contacts'>
                <Box
                    paddingLeft='8px'
                    paddingRight='40px'
                    paddingTop='8px'
                    paddingBottom="40px">
                    <Filter filter={filter} changeFilter={changeFilter}/>
                    <ContactsList contacts={getFilteredContacts()} deleteContacts={deleteContact}/>
                </Box>
            </Section>
        </Box>
    )
};
export default PhoneBook;

