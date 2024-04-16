import Comments from '../../components/common/Comments/Comments';
import Images from '../../components/common/Images/Images';
import Posts from '../../components/common/Posts/Posts';
import styles from './homePage.module.css';

function HomePage(){
    return(
        <div className={styles.homeContainer}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <div className={styles.navBar}>
                    <button className={styles.navButtons}>Posts</button>
                    <button className={styles.navButtons}>Comments</button>
                    <button className={styles.navButtons}>Images</button>
                </div>
                <div>
                    <button  className={styles.logOut}>Log out</button>
                    </div>
            </header>
            <Images/>
        </div>
    );
}
export default HomePage