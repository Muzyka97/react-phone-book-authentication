import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation'; 

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

const Login = () => {
const dispach = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = ({target: {name, value}})=>{
  switch(name){
    case 'email' :
      return setEmail(value)
    case 'password' :
      return setPassword(value)
    default :
      return
  };
};

const handleSubmit = e => {
  e.preventDefault();
  dispach(logIn({email, password}));
  setEmail('');
  setPassword('');
};

    return (
        <>
         <div>
      <h1>Сторінка логіна</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type={"submit"}>Вхід</Button>
      </form>
    </div>
        </>
    )
};
export default Login;