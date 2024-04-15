import styles from'./signIn.module.css'
import SignInForm from "../../components/common/SignInForm/SignInForm";
import Welcome from "../../components/common/Welcome/Welcome";

function SignIn(){
    return(
        <div className={styles.Signin}>
            <h1 className={styles.Title}>Welcome to Data Fetch Application</h1>
            {/* <Welcome/> */}
            <SignInForm/>
        </div>
    );
}

export default SignIn;