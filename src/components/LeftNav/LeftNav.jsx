import Link from "next/link";
import styles from "./LeftNav.module.css";
import Logo from "../../../public/Logo";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";

const LeftNav = ({ derivatives, orderBook, features, institutional, earn, charts, finance,
  renderDropDown, renderDropDown_4_8, renderDropDown_0_5, renderDropDown_5_10, renderDropDown_0_6, renderDropDown_6_12}) => {
  return (
    <nav className={`${styles.nav_left} nav_left`}>
      <div className={styles.left_con}>
        <ul className={styles.orderList}>
          <li className={styles.logo}><Link href="/"><Logo href="/"/></Link></li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Order Book</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={styles.submenu}>
              <ul className={styles.submenu_orderlist}>
                <li className={styles.submenu_li_head}></li>  
                {renderDropDown(orderBook)}
              </ul>
            </div>
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Features</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={`${styles.submenu}`}>
              <ul className={styles.submenu_orderlist}>
                {renderDropDown(features)}
              </ul>
          </div> 
          </li>
          <li className={styles.newdropdown}>
            <Link href="/"><div className={styles.sub}>Charts</div><AiFillCaretDown className={styles.arrow_triangle} /></Link>
            <div className={`${styles.submenu} ${styles.submenu_charts}`}>
              <div className={styles.col_1}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown(charts)}
                </ul>
              </div>
              <div className={styles.col_2}> 
                <ul className={styles.submenu_orderlist}>
                  {renderDropDown_4_8(charts)}
                </ul>
              </div>    
            </div> 
          </li>
         
          <li className={styles.submenu_li_feed}>
            <Link href="/"><div className={styles.sub}>Feed</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default LeftNav;