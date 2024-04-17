import { useNavigate } from 'react-router-dom';
import styles from './signInForm.module.css'
import { useDispatch } from 'react-redux';
import { setShowForm } from '../../../features/logInSlice/loginSlice';
import { useState } from 'react';
import { login } from '../../../features/authSlice/authSlice';

function SignInForm (){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogIn = () =>{
        if(!validateEmail(email)){
            alert('Please enter a valid e-mail address');
            return;
        }
        navigate('/home')
        dispatch(login({email, password}));
    };

    const handelCancleForm = ()=>{
        dispatch(setShowForm(true))
    };

    return (
    <div className={styles.SignForm}>
        <h2>Log in / Sign up</h2>
        <div className={styles.InputForm}>
        <div className={styles.Form}>
            <label htmlFor="email" style={{paddingRight: "35px"}}>email</label>
            <input type="email" onChange={(elem) => setEmail(elem.target.value)} placeholder='Enter your email' />
        </div>
        <div className={styles.Form}>
            <label htmlFor="password">password</label>
            <input type="password" onChange={(elem) => setPassword(elem.target.value)} placeholder='Enter your password' />
        </div>
        </div>
        <div className={styles.FormButton}>
            <button className={styles.RegisterButton} onClick={handelCancleForm}>Cancel</button>
            <button className={styles.RegisterButton} onClick={handleLogIn}>Log in</button>
        </div>
    </div>
    );
}

export default  SignInForm;