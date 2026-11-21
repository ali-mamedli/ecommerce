import styles from "./forgot.password.module.css"

function Forgotpassword() {
    
    return(
        <div className={styles.formWrapper}>
            <form className={styles.ForgotpasswordForm}>
                <p className={styles.ForgotpasswordText}>Please enter the email address associated with your account. We'll promptly send you a link to reset your password.</p>
                <label htmlFor="" className={styles.formLabel}>
                    Email
                    <input type="text" className={styles.formInput}/>
                    </label>
                    <button className={styles.btnForgot}>Send reset link</button>             
            </form>
        </div>
    )
    
}

export default Forgotpassword