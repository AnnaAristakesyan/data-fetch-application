import styles from "./comment.module.css";
import { CommentBoxes } from "../Consts/commentsConst";

function Comments (){
    return(
        <div className={styles.commentContainer}>
        {CommentBoxes.map(([el1, el2, el3, el4], index)=>(
          <div className={styles.comBox} key={index}>
              <p>Id {el1}, {el2} </p>
              <p>Email {el3}</p>
              <p>{el4}</p>
          </div>
        ))}
      </div>
    );
}

export default Comments