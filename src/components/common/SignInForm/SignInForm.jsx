import styles from './signInForm.module.css'

function SignInForm (){
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
            <button className={styles.RegisterButton}>Cancel</button>
            <button className={styles.RegisterButton}>Log in</button>
        </div>
    </div>
    );
}

export default  SignInForm;