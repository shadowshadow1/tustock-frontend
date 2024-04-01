import Link from "next/link";
import styles from "./PopularStocks.module.css";
import ArrowRightShort from "../../../public/Arrow-Right-Short";
import Image from "next/image";

const PopularStocks = () => {
    return (
        <div className={styles.popularstocks}>
            <div className={styles.popularstocks_title}>
                <div className={styles.popularstocks_title_1}>Popular Stocks</div>
                <Link href="#" className={styles.popularstocks_title_2}>
                    <div className={styles.popularstocks_title_2_item_1}>View more markets</div>
                    <ArrowRightShort />
                </Link>
            </div>
            <div className={styles.popularstocks_subtitles}>
                <div className={styles.popularstocks_subtitle_name}>Name</div>
                <div className={styles.popularstocks_subtitle_lastprice}>Last Price</div>
                <div className={styles.popularstocks_subtitle_name_24change}>24h Change</div>
                <div className={styles.popularstocks_subtitle_name_marketcap}>MarketCap</div>
            </div>
            <div className={styles.popularstocks_coins}>
                <Link href="#" className={styles.popularstocks_coins_bnb}>
                    <div className={styles.popularstocks_coin_bnb}>
                        <Image src="/maize.png"
                            alt="Maize"
                            className={styles.popularstocks_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                            width: '3.6rem',
                            height: 'auto',
                            }}
                            />
                        <div className={styles.popularstocks_coins_name}>Maize</div>
                        <div className={styles.popularstocks_coins_symbol}>MAZ</div>
                    </div>
                    <div className={styles.popularstocks_coins_price}>$ 270.6</div>
                    <div className={styles.popularstocks_coins_change}>+0.66%</div>
                    <div className={styles.popularstocks_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularstocks_coins_bnb}>
                    <div className={styles.popularstocks_coin_bnb}>
                        <Image
                            src="/Beans.png"
                            alt="Beans"
                            className={styles.popularstocks_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularstocks_coins_name}>Beans</div>
                        <div className={styles.popularstocks_coins_symbol}>BEN</div>
                    </div>
                    <div className={styles.popularstocks_coins_price}>$ 270.6</div>
                    <div className={styles.popularstocks_coins_change}>+0.66%</div>
                    <div className={styles.popularstocks_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularstocks_coins_bnb}>
                    <div className={styles.popularstocks_coin_bnb}>
                        <Image
                            src="/wheat.png"
                            alt="Wheat"
                            className={styles.popularstocks_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularstocks_coins_name}>Wheat</div>
                        <div className={styles.popularstocks_coins_symbol}>WHT</div>
                    </div>
                    <div className={styles.popularstocks_coins_price}>$ 270.6</div>
                    <div className={styles.popularstocks_coins_change}>+0.66%</div>
                    <div className={styles.popularstocks_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularstocks_coins_bnb}>
                    <div className={styles.popularstocks_coin_bnb}>
                        <Image
                            src="/rice.png"
                            alt="Rice"
                            className={styles.popularstocks_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularstocks_coins_name}>Rice</div>
                        <div className={styles.popularstocks_coins_symbol}>RIC</div>
                    </div>
                    <div className={styles.popularstocks_coins_price}>$ 270.6</div>
                    <div className={styles.popularstocks_coins_change}>+0.66%</div>
                    <div className={styles.popularstocks_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularstocks_coins_bnb}>
                    <div className={styles.popularstocks_coin_bnb}>
                        <Image
                            src="/kales.png"
                            alt="Kale"
                            className={styles.popularstocks_coins_bnbimg}
                            width={36}
                            height={36}
                            sizes="100vw"
                            style={{
                                width: '3.6rem',
                                height: 'auto',
                            }}
                        />
                        <div className={styles.popularstocks_coins_name}>Kale</div>
                        <div className={styles.popularstocks_coins_symbol}>KAL</div>
                    </div>
                    <div className={styles.popularstocks_coins_price}>$ 270.6</div>
                    <div className={styles.popularstocks_coins_change}>+0.66%</div>
                    <div className={styles.popularstocks_coins_marketcap}>$43.5M</div>
                </Link>
                <Link href="#" className={styles.popularstocks_title_2_mobile}>
                    <div className={styles.popularstocks_title_2_item_1}>View more markets</div>
                    <ArrowRightShort />
                </Link>
                <div className={styles.get_started_feature}>
                    <h3 className={styles.get_started_feature_text}>Sign up now to build your own portfolio for free!</h3>
                    <Link className={styles.get_started_feature_button} href="#">Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default PopularStocks;