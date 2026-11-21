import styles from "./login.module.css"
import Google from "../../assets/Google.png"

function Login() {

    return (
        <div className={styles.formWrapper}>
            <form className={styles.loginForm}>
                <button className={styles.btnGoogle}>
                    <img src={Google} alt="" className={styles.imgGoogle} />
                    <p className={styles.btnGoogleText}>Continue with Google</p>
                </button>
                <div className={styles.orBlock}>
                    <div className={styles.leftOrBlock}></div>
                    <div className={styles.Or}>OR</div>
                    <div className={styles.rightOrBlock}></div>
                </div>
                <label htmlFor="" className={styles.formLabel}>
                    Email
                    <input type="text" className={styles.formInput} />
                </label>
                <label htmlFor="" className={styles.formLabel}>
                    Password
                    <input type="text" className={styles.formInput} />
                </label>
                <a href="/forgotpassword" className={styles.forgotLink}>Forgot Password?</a>
                <button className={styles.btnLogin}>Login</button>
                <div className={styles.bottomBlock}>
                    <p className={styles.bottomBlockText}>Don't have an account?</p>
                    <a href="/signup" className={styles.bottomBlockLink}>Sign up</a>
                </div>
            </form>
        </div>
    )
}

export default Login