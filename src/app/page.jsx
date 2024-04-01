import Header from '@/Layouts/Header/Header'
import styles from './page.module.css'
import NavBar from '@/Layouts/NavBar/NavBar'
import News from '@/Layouts/News/News'
import PopularStocks from '@/Layouts/PopularStocks/PopularStocks'
import TradeFree from '@/Layouts/TradeFree/TradeFree'
import Portfolio from '@/Layouts/Portfolio/Portfolio'
import EarnSpr from '@/Layouts/EarnSpr/EarnSpr'
export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <News/>
    <PopularStocks/>
    <TradeFree/>
    <Portfolio/>
    <EarnSpr/>

    </>
  )
}
