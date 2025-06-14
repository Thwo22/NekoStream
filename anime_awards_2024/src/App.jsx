import { useState } from 'react'
import Styles from "./components/modulos_css/app.module.css"
import Header from './components/header'
import Banner from './components/banner'
import SessaoPopulares from './components/populares'
import SessaoSeinen from './components/seinen'


function App() {

  return (
    <>
    <Header />
    <Banner />
    <div className={Styles.container_das_sessoes}>
      <SessaoPopulares />
      <SessaoSeinen />
    </div>
    </>
  )
}

export default App
