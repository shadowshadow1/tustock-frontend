import Image from "next/image";
import styles from "./Portfolio.module.css";
import Kyc from "../../../public/kyc";
import User from "../../../public/user";
import Spot from "../../../public/spot";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className={styles.portfolio_warper}>
            <div className={styles.portfolio}>
                <div className={styles.portfolio_left}>
                    <div className={styles.portfolio_left_header}>
                        <div className={styles.portfolio_left_header_title}>Build your portfolio</div>
                        <div className={styles.portfolio_left_header_description}>Start your first investment with these easy steps.</div>
                    </div>
                    <div className={styles.phone_img_mobile}>
                        <Image
                            src="/portfolio-section.png"
                            alt='portfolio'
                            width={700}
                            height={676}
                            sizes="100vw"
                            style={{
                              width: '100%',
                              height: '676px',
                            }}
                        />
                    </div>
                    <div className={styles.verfiy_identy}>
                        <Kyc />
                        <div className={styles.verfiy_identy_text}>
                            <div className={styles.verfiy_identy_text_title}>Verify your identity</div>
                            <div className={styles.verfiy_identy_text_desc}>Complete the identity verification process to secure your account and transactions.</div>
                        </div>
                    </div>
                    <div className={styles.fund_account}>
                        <User />
                        <div className={styles.fund_account_text}>
                            <div className={styles.fund_account_text_title}>Fund your account</div>
                            <div className={styles.fund_account_text_desc}>Add funds to your tustock account to start investing. You can add funds with a variety of payment methods.</div>
                        </div>
                    </div>
                    <div className={styles.start_trading}>
                        <Spot />
                        <div className={styles.start_trading_text}>
                            <div className={styles.start_trading_text_title}>Start trading</div>
                            <div className={styles.start_trading_text_desc}>You`re good to go! Buy stocks, set identify investments, and discover what tustock has to offer.</div>
                        </div>
                    </div>
                    <Link className={styles.button} href="#">Get Started</Link>
                </div>
                <div className={styles.portfolio_right}>
                    <Image
                        src="/portfolio-section.png"
                        alt='Portfolio'
                        width={335}
                        height={676}
                        sizes="100vw"
                        style={{
                        width: '100%',
                        height: '676px',
                    }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;