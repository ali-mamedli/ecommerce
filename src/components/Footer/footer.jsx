import styles from "./footer.module.css"
import FooterLogo from "../../assets/Footer-logo.png"
import Github from "../../assets/Github.png"
import Instagram from "../../assets/Instagram.png"
import Youtube from "../../assets/Youtube.png"
import Mastercard from "../../assets/Mastercard.png"
import Amex from "../../assets/Amex.png"
import Visa from "../../assets/Visa.png"
import { href } from "react-router-dom"


const navigations = [
    {
        title: "Support",
        links: [
            {
                name: "FAQ",
                href: "/faq"
            },

            {
                name: "Terms of use",
                href: "/terms-of-use"
            },

            {
                name: "Privacy Policy",
                href: "/privacy-policy"
            },
        ]
    },
    {
        title: "COMPANY",
        links: [
            {
                name: "About us",
                href: "/about-us"
            },
            {
                name: "Contact",
                href: "/contact"
            },
            {
                name: "Careers",
                href: "/careers"
            },
        ]
    },
    {
        title: "SHOP",
        links: [
            {
                name: "My Account",
                href: "my-account"
            },
            {
                name: "Checkout",
                href: "checkout"
            },
            {
                name: "Cart",
                href: "cart"
            }
        ]
    }
]

function Footer() {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.topBlock}>
                <div className={styles.left}>
                    <h1 className={styles.title}>Join Our Newsletter</h1>
                    <p className={styles.description}>We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <div className={styles.rightTopBlock}>
                    <input type="text" className={styles.input} placeholder="Your email address" />
                    <button className={styles.btn}>Subcribe</button>
                </div>
            </div>
            <div className={styles.centerBlock}>
                <div className={styles.left}>
                    <img src={FooterLogo} alt="" className={styles.leftImg} />
                    <p className={styles.leftDescription}>DevCut is a YouTube channel for practical project-based learning.</p>
                    <div className={styles.bottom}>
                        <a href="" className={styles.socialMediaLink}>
                            <img src={Github} alt="" className={styles.linkImg} />
                        </a>
                        <a href="" className={styles.socialMediaLink}>
                            <img src={Instagram} alt="" className={styles.linkImg} />
                        </a>
                        <a href="" className={styles.socialMediaLink}>
                            <img src={Youtube} alt="" className={styles.linkImg} />
                        </a>
                    </div>
                </div>
                <div className={styles.middle}>
                    {navigations.map((item) => (
                        <div className={styles.navBlock} key={item.title}>
                            <p className={styles.navBlockTitle}>{item.title}</p>
                            {item.links.map((link) => (
                                <a href={link.href} className={styles.navBlockHref} key={link.href}>{link.name}</a>
                            ))}
                        </div>
                    ))}

                </div>
                <div className={styles.right}>
                    <p className={styles.rightTitle}>ACCEPTED PAYMENTS</p>
                    <div className={styles.rightImgBlock}>
                        <img src={Mastercard} alt="" className={styles.paymentLogo}/>
                        <img src={Amex} alt="" className={styles.paymentLogo}/>
                        <img src={Visa} alt="" className={styles.paymentLogo}/>
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>© 2023 DevCut. All rights reserved.</div>

        </div>
    )

}

export default Footer