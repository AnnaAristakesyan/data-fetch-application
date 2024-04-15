import styles from './welcome.module.css';

function Welcome (){
    return(
        <div className={styles.Welcome}>
                <button className={styles.signButton}>Log in</button>
                <button className={styles.signButton}>Sign up</button>
            </div>
    );
}

export default Welcome;