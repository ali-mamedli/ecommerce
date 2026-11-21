import styles from "./signUp.module.css"
import Google from "../../assets/Google.png"

function SignUp() {

    return (
        <div className={styles.formWrapper}>
            <form className={styles.signUpForm}>
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
                    Name
                    <input type="text" className={styles.formInput}/>
                </label>
                <label htmlFor="" className={styles.formLabel}>
                    Email
                    <input type="text" className={styles.formInput} />
                </label>
                <label htmlFor="" className={styles.formLabel}>
                    Password
                    <input type="text" className={styles.formInput} />
                </label>
                <p className={styles.creating}>By creating an account you agree with our Terms of Service, Privacy Policy,</p>
                <button className={styles.btnCreate}>Create account</button>
                <div className={styles.bottomBlock}>
                    <p className={styles.text}>Already have an account?</p>
                    <a href="/login" className={styles.bottomBlockLink}>Log in</a>
                </div>
            </form>
        </div>
    )
}

export default SignUp