import styles from'./signIn.module.css'
import SignInForm from "../../components/common/SignInForm/SignInForm";
import Welcome from "../../components/common/Welcome/Welcome";
import { useSelector } from 'react-redux';

function SignIn(){
    const showForm = useSelector(state => state.logIn.showForm);

    return(
        <div className={styles.Signin}>
            <h1 className={styles.Title}>Welcome to Data Fetch Application</h1>
            {showForm? (
                <Welcome/>
            ): (<SignInForm/>)}
        </div>
    );
}

export default SignIn;