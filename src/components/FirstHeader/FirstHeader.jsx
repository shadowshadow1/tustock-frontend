import styles from "./FirstHeader.module.css";
import Link from "next/link";
import PresentBinance from "../../../public/PresentBinance";
import ArrowRightShort from "../../../public/Arrow-Right-Short";
import HumanIcon from "../../../public/human-icon";
import AppleIcon from "../../../public/AppleIcon";
import Image from "next/image";
const FirstHeader = () => {
    return (
        <div className={styles.first_header}>
            <div className={styles.left_header}>
                <h1 className={styles.first_h1}>Invest in agriculture today the smart way with us</h1>
                <div className={styles.header_login_sign}>
                    <Link className={styles.marketing_small} href="#">
                       
                    </Link>
                    <div className={styles.signup_login}>
                        <Link href="#" className={styles.signup_login_link}>
                            <HumanIcon />
                            <div className={`${styles.signup_login_text} ${styles.button_effect}`}>Sign up with Email or Phone</div>
                        </Link>
                    </div>
                    <div className={styles.hr_element}>
                        <div className={styles.hr_element_first} />
                        <div className={styles.hr_element_text}>or continue with</div>
                        <div className={styles.hr_element_second} />
                    </div>
                    <div className={styles.signup_buttons}>
                        <Link href="#" className={styles.google_button}>
                            <Image width={16} height={16} src="/google-icon.png" alt="googleicon" />
                            <div className={styles.google_text}>Google</div>
                        </Link>
                        <Link href="#" className={styles.apple_button}>
                            <AppleIcon />
                            <div className={styles.apple_text}>Apple</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.right_header}>
                <div className={styles.nft_img}>
                    <h1>MAERKET VIEW</h1>
                </div>
            </div>
        </div>
    );
}

export default FirstHeader;