import styles from './posts.module.css';
import { PostsBoxes } from '../Consts/postsConst';

function Posts(){
    return (
        <div className={styles.postsContainer}>
          {PostsBoxes.map(([el1, el2])=>(
            <div className={styles.BoxPost}>
                <h4>{el1}</h4>
                <p>{el2}</p>
            </div>
          ))}
        </div>
    );
}
export default Posts