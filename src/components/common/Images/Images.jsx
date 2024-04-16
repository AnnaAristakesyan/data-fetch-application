import styles from './image.module.css';
import nkar1 from './img/240_F_508654968_ZH8LsHw8psJUD3DS4a0H9HwsTkNsI4GB.jpg'
import nkar2 from './img/63664845-réservation-vol-voyage-site-web-concept.jpg'
import nkar3 from './img/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg'
import nkar4 from './img/images.jpg'


function Images(){
    return(
        <div className={styles.imgConatiner}>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar1} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 1</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar2} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar4} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 2</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar3} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar1} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 3</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar2} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar4} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 4</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar3} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar4} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 5</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar3} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar1} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 6</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar2} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar4} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 7</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar3} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
            <div className={styles.imgBox}>
                <div className={styles.imgTitle}>
                 <img src={nkar1} alt="nkar" style={{width: '80px', height: "80px"}}  />
                 <h5 style={{fontSize: "20px"}}>Image 8</h5>
                </div>
                <div className={styles.bigImg}>
                    <img src={nkar2} alt="nkar" style={{width: '250px', height: "200px"}} />
                </div>
            </div>
        </div>
    );
}

export default Images