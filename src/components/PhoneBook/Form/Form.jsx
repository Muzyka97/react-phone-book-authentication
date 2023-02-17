import styled from 'styled-components';

import PropTypes from 'prop-types'; 

import useForm from 'hooks/useForm';
import Button from 'shared/Button';

import {initialState} from './initialState';


const FormItem = styled.form`
    padding: 0px;
`;
const InputSpaceForm = styled.input`
    margin-top: ${p=>p.theme.space[3]}px;
    margin-bottom: ${p=>p.theme.space[3]}px;
`;

const Form = ({ onSubmit })=> {

    const { state, handleInputChange, handleSubmitForm} = useForm({
        initialState,
        onSubmit,
    });

    const { name, number } = state;

    return(
        <>
        <FormItem onSubmit={handleSubmitForm}>
            <label>
                Name <br />
                <InputSpaceForm
                    type="text"
                    name='name'
                    onChange={handleInputChange}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
            </label> <br />
            <label>
                Number <br />
                <InputSpaceForm
                    type="tel"
                    name="number"
                    onChange={handleInputChange}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label> <br />
            <Button type={"submit"}>Додати контакт</Button>
        </FormItem>
        </>
    )   
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;