import { Routes, Route, useNavigate } from 'react-router-dom';
import Comments from '../../components/common/Comments/Comments';
import Images from '../../components/common/Images/Images';
import Posts from '../../components/common/Posts/Posts';
import styles from './homePage.module.css';
import { useDispatch } from 'react-redux';
import { setShowForm } from '../../features/logInSlice/loginSlice';


function HomePage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handelCancleForm = ()=>{
        dispatch(setShowForm(true));
        navigate('/');
    };
    return(
        <div className={styles.homeContainer}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <div className={styles.navBar}>
                    <button className={styles.navButtons} onClick={()=> {navigate('posts')}}>Posts</button>
                    <button className={styles.navButtons} onClick={()=> {navigate('comments')}}>Comments</button>
                    <button className={styles.navButtons} onClick={()=> {navigate('images')}}>Images</button>
                </div>
                <div>
                    <button  className={styles.logOut}  onClick={handelCancleForm}>Log out</button>
                    </div>
            </header>
            <Routes>
                <Route path='/*' element={<Posts/>}/>
                <Route path='comments/*' element={<Comments/>}/>
                <Route path='images/*' element={<Images/>}/>
            </Routes>
            </div>
    );
}
export default HomePage