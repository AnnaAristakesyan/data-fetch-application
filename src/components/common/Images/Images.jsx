import styles from './image.module.css';
import { ImageConsts } from '../Consts/imagesConst';


function Images(){
    return(
        <div className={styles.imgConatiner}>
            {ImageConsts.map(([elem1, elem2, elem3])=>(
                <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={elem1} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>{elem2}</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={elem3} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            ))}
        </div>
    );
}

export default Images