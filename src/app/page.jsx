import Header from '@/Layouts/Header/Header'
import styles from './page.module.css'
import NavBar from '@/Layouts/NavBar/NavBar'
import News from '@/Layouts/News/News'
import PopularStocks from '@/Layouts/PopularStocks/PopularStocks'
import TradeFree from '@/Layouts/TradeFree/TradeFree'
export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <News/>
    <PopularStocks/>
    <TradeFree/>

    </>
  )
}
