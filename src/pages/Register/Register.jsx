import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation'; 

import Button from 'shared/Button';

const styles = {
    form: {
      width: 320,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
    },
};

const Register = () => {
    const dispach = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleChange = ({target: {name, value}}) => {
    switch(name){
        case 'name' :
            return setName(value)
        case 'email' :
            return  setEmail(value)
        case 'password' :
            return setPassword(value)  
        default :
             return
    };
};

const handleSubmit = e => {
    e.preventDefault();
    dispach(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
};

    return(
        <div>
        <h1>Сторінка для реєстрації</h1>
  
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Імя
            <input 
            type="text" 
            name="name" 
            value={name} 
            placeholder="Імя"
            onChange={handleChange} 
            />
          </label>
  
          <label style={styles.label}>
            Пошта
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Пошта"
              onChange={handleChange} 
            />
          </label>
  
          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Пароль повинен містити більше 7-ми симфолів."
              onChange={handleChange}
            />
          </label>
          <Button type={"submit"}>Зареєструватися</Button>
        </form>
      </div>
    )
};

export default Register;