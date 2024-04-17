import { useNavigate } from 'react-router-dom';
import styles from './signInForm.module.css'
import { useDispatch } from 'react-redux';
import { setShowForm } from '../../../features/logInSlice/loginSlice';

function SignInForm (){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogIn = () =>{
        navigate('/home')
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
            <input type="email" />
        </div>
        <div className={styles.Form}>
            <label htmlFor="password">password</label>
            <input type="password" />
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