import SecondHeader from "@/components/SecondHeader/SecondHeader";
import styles from "./Header.module.css";
import FirstHeader from "@/components/FirstHeader/FirstHeader";

const Header = () => {
    return (
        <div className={styles.header}>
            <FirstHeader />
            <SecondHeader />
         
        </div>
    );
}

export default Header;