import { useDispatch } from 'react-redux';
import styles from './welcome.module.css';
import { setShowForm } from '../../../features/logInSlice/loginSlice';

function Welcome (){
    const dispatch = useDispatch();

    const handleShowingForm = ()=>{
        dispatch(setShowForm(false));
    };

    return(
        <div className={styles.Welcome}>
                <button className={styles.signButton} onClick={handleShowingForm}>Log in</button>
                <button className={styles.signButton} onClick={handleShowingForm}>Sign up</button>
            </div>
    );
}

export default Welcome;