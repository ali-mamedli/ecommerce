import styles from "./hero.module.css"
import HeroImage from "../../../assets/HeroImage.png"

function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <h1 className={styles.title}>Fresh Arrivals Online</h1>
                <p className={styles.description}>Discover Our Newest Collection Today.</p>
                <button className={styles.btnHero}>View Collection</button>
            </div>

            <img src={HeroImage} alt="" className={styles.heroImage}/>
        </div>
    )

}

export default Hero