import styles from "./features.module.css"
import IconCar from "../../../assets/IconCar.png"
import IconMedal from "../../../assets/IconMedal.png"
import IconCheckBox from "../../../assets/IconCheckBox.png"

const features = [
    {
        img: IconCar,
        title: "Free Shipping",
        description: "Upgrade your style today and get FREE shipping on all orders! Don't miss out."
    },

    {
        img: IconMedal,
        title: "Satisfaction Guarantee",
        description: "Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
    },

    {
        img: IconCheckBox,
        title: "Secure Payment",
        description: "Your security is our priority. Your payments are secure with us."
    }
]

function Features() {

    return (
        <div className={styles.container}>

            {features.map((item) => (
                <div className={styles.block} key={item.title}>
                    <img src={item.img} alt="" className={styles.img} />
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.description}</p>
                </div>
            ))}

        </div>
    )

}

export default Features