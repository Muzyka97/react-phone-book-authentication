// import styled from 'styled-components';
import {Box, TextField} from '@mui/material';
import PropTypes from 'prop-types'; 

import useForm from 'hooks/useForm';
import Button from 'shared/ButtonShared';

import {initialState} from './initialState';


// const FormItem = styled.form`
//     padding: 0px;
// `;
// const InputSpaceForm = styled.input`
//     margin-top: ${p=>p.theme.space[3]}px;
//     margin-bottom: ${p=>p.theme.space[3]}px;
// `;

const Form = ({ onSubmit })=> {

    const { state, handleInputChange, handleSubmitForm} = useForm({
        initialState,
        onSubmit,
    });

    const { name, number } = state;

    return(
        <Box sx={{mb: 8}}>
            <Box 
                component='form' 
                m="auto"
                onSubmit={handleSubmitForm}
                sx={{     
                    width: 700,
                    padding: 1,
                }}
                >
                <TextField
                    id="standard-name" 
                    label="name" 
                    variant="standard"
                    size='small'
                    fullWidth 
                    type="text"
                    name='name'
                    onChange={handleInputChange}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    />
                <TextField
                    id="standard-number" 
                    label="number" 
                    variant="standard"
                    size='small'
                    fullWidth 
                    type="tel"
                    name="number"
                    onChange={handleInputChange}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    required
                    />
                <Box
                  component='span'
                  display='flex' 
                  justifyContent="center"
                  sx={{mt: 5}}
                  >    
                    <Button type={"submit"}>Додати контакт</Button>
                </Box>
            </Box>
        </Box>
    )   
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;