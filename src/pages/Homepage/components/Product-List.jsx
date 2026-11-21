import styles from "./product-list.module.css"
import feturedblock1 from "../../../assets/featured-block1.png"
import feturedblock2 from "../../../assets/featured-block2.png"
import feturedblock3 from "../../../assets/featured-block3.png"
import feturedblock4 from "../../../assets/featured-block4.png"
import bestSeller1 from "../../../assets/bestSeller1.png"
import bestSeller2 from "../../../assets/bestSeller2.png"
import bestSeller3 from "../../../assets/bestSeller3.png"
import bestSeller4 from "../../../assets/bestSeller4.png"
import { useState } from "react"

const featured = [

    {
        img: feturedblock1,
        name: "Elegant Ebony Sweatshirts",
        status: "IN STOCK",
        price: "35.00$"
    },
    {
        img: feturedblock2,
        name: "Sleek and Cozy Black",
        status: "IN STOCK",
        price: "57.00$"
    },
    {
        img: feturedblock3,
        name: "Raw Black Tees",
        status: "IN STOCK",
        price: "19.00$"
    },
    {
        img: feturedblock4,
        name: "MOCKUP Black",
        status: "IN STOCK",
        price: "30.00$"
    }
]

const latest = [
    {
        img: bestSeller1,
        name: "Classic Monochrome Tees",
        status: "IN STOCK",
        price: "35.00$"
    },
    {
        img: bestSeller2,
        name: "Monochromatic Wardrobe",
        status: "IN STOCK",
        price: "27.00$"
    },
    {
        img: bestSeller3,
        name: "Essential Neutrals",
        status: "IN STOCK",
        price: "22.00$"
    },
    {
        img: bestSeller4,
        name: "UTRAANET Black",
        status: "IN STOCK",
        price: "43.00$"
    }
]

function ProductList() {
    const [switcher, setSwicher] = useState("featured")
    return (
        <div className={styles.container}>
            <div className={`${styles.topBlock} ${styles.topBlock2}`}>
                <button className={`${styles.btn} ${switcher === "featured" ? styles.activeBtn : null}`} onClick={() => setSwicher("featured")}>Featured</button>
                <button className={`${styles.btn} ${switcher === "latest" ? styles.activeBtn : null}`} onClick={() => setSwicher("latest")}>Latest</button>
            </div>
            {switcher == "featured" && (
                <div className={styles.list}>
                    {featured.map((item) => (
                        <div className={styles.card}>
                            <div className={styles.cardBlock}>
                                <img src={item.img} alt="" className={styles.cardImg} />
                            </div>
                            <p className={styles.productName}>{item.name}</p>

                            <div className={styles.priceBlock}>
                                <div className={styles.status}>{item.status}</div>
                                <p className={styles.price}>{item.price}</p>
                            </div>

                        </div>
                    ))}
                </div>
            )}

            {switcher == "latest" && (
                <div className={styles.list}>
                    {latest.map((item) => (
                        <div className={styles.card}>
                            <div className={styles.cardBlock}>
                                <img src={item.img} alt="" className={styles.cardImg} />
                            </div>
                            <p className={styles.productName}>{item.name}</p>

                            <div className={styles.priceBlock}>
                                <div className={styles.status}>{item.status}</div>
                                <p className={styles.price}>{item.price}</p>
                            </div>

                        </div>
                    ))}
                </div>
            )}



        </div>
    )

}

export default ProductList