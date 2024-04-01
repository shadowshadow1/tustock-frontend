import styles from "./SecondHeader.module.css";

const SecondHeader = () => {
    return (
        <div className={styles.secondheader}>
            <div className={styles.billion76}>
                <div className={styles.billion76_title}>$700,00</div>
                <p className={styles.billion76_description}>24h trading volume of market Cryptocurrency</p>
            </div>
            <div className={styles.currencies350}>
                <div className={styles.currencies350_title}>35,000+</div>
                <p className={styles.currencies350_description}>Farmers listed</p>
            </div>
            <div className={styles.million120}>
                <div className={styles.million120_title}>12,000</div>
                <p className={styles.million120_description}>Registered users</p>
            </div>
            <div className={styles.ten_pracent}>
                <div className={styles.ten_pracent_title}>less then 1.1%</div>
                <p className={styles.ten_pracent_description}>Lowest transaction fees</p>
            </div>
        </div>
    );
}

export default SecondHeader;