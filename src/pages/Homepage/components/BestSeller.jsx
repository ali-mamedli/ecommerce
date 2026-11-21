import styles from "./best-seller.module.css"
import bestSeller1 from "../../../assets/bestSeller1.png"
import bestSeller2 from "../../../assets/bestSeller2.png"
import bestSeller3 from "../../../assets/bestSeller3.png"
import bestSeller4 from "../../../assets/bestSeller4.png"

const bestSelleres = [
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

function BestSeller() {

    return (

        <div className={styles.container}>

            <div className={styles.block}>
                <p className={styles.name}>Shop Now</p>
                <h1 className={styles.title}>Best Selling</h1>
            </div>

            <div className={styles.products}>
                {bestSelleres.map((item) => (
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


        </div>
    )

}

export default BestSeller