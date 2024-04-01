import Link from "next/link";
import ArrowRightShort from "../../../public/Arrow-Right-Short";
import Image from "next/image";
import styles from "./TradeFree.module.css";

const TradeFree = () => {
    return (
        <div className={styles.trade_free_warper}>
          <div className={styles.trade_free}>
              <div className={styles.trade_free_img_warper}>
                <Image
                    src="/greenmarket.png"
                    alt="Market Place"
                    width={325}
                    height={325}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                }}
                />
              </div>
              <div className={styles.trade_free_description}>
                  <div className={styles.trade_free_description_title}>Buy Stocks For Free</div>
                  <Link href="#" className={styles.item_1}>
                      <div>Start your agricultural investment journey today with a free account</div>
                      <ArrowRightShort/>
                  </Link>
                  <Link href="#" className={styles.item_2}>
                      <div>Lowest transactions fees {`< 1.1%`} </div>
                      <ArrowRightShort/>
                  </Link >
                  <Link href="#" className={styles.item_3}>Buy Stocks Now</Link>
              </div>
          </div>
      </div>
    );
};

export default TradeFree;