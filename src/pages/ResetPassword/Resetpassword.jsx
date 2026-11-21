import styles from "./reset.password.module.css"

function Resetpassword() {

    return(
        <div className={styles.formWrapper}>
            <form className={styles.resetPasswordForm}>
                <label htmlFor="" className={styles.formLabel}>
                    New password
                    <input type="text" className={styles.formInput}/>
                </label>
                <label htmlFor="" className={styles.formLabel}>
                    Confirm password
                    <input type="text" className={styles.formInput}/>
                </label>
                <button className={styles.btnReset}>Reset password</button>
            </form>
        </div>
    )

}

export default Resetpassword