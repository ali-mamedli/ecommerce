import styles from "./categories-cta.module.css"
import CategoriesImg from "../../../assets/Categories-img.png"

function CategoriesCTA() {
    
    return(
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <h1 className={styles.title}>Browse Our Fashion Paradise!</h1>
                <p className={styles.description}>Step into a world of style and explore our diverse collection of clothing categories.</p>
                <button className={styles.btnStart}>Start Browsing</button>
            </div>
            <img src={CategoriesImg} alt="" className={styles.image}/>
        </div>
    )

}

export default CategoriesCTA