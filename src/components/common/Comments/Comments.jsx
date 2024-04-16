import styles from "./comment.module.css";
import { CommentBoxes } from "../Consts/commentsConst";

function Comments (){
    return(
        <div className={styles.commentContainer}>
        {CommentBoxes.map(([el1, el2, el3])=>(
          <div className={styles.comBox}>
              <p>Id {el1}</p>
              <p>Email {el2}</p>
              <p>{el3}</p>
          </div>
        ))}
      </div>
    );
}

export default Comments