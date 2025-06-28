import { useState } from 'react'
import Styles from "./components/modulos_css/app.module.css"
import Header from './components/header'
import Banner from './components/banner'
import SessaoPopulares from './components/populares'
import SessaoSeinen from './components/seinen'
import SessaoComedia from './components/comedia'
import SessaoRomance from './components/romance'
import SessaoAlta from './components/alta'
import SessaoLista from './components/minhaLista'
import { MinhaListaProvider } from './components/contexts/minhaListacontext'


function App() {

  return (
    <>
    <MinhaListaProvider>
      <div className={Styles.container_superior}>
        {/*Minha lista provider pega todos os animes e os torna em objetos que podem ser adicionados a sua lista*/}
          <Header /> {/*Componente Header, onde se localiza as navs e outras funcionalidades*/}
          <Banner />  {/*Banner é o componente carrossel de alguns títulos de animes disponiveis no site*/}
      </div>
      <div className={Styles.container_das_sessoes}> 
        <SessaoAlta />
        <SessaoPopulares />
        <SessaoSeinen />
        <SessaoComedia />
        <SessaoLista />
        <SessaoRomance />
      </div>
    </MinhaListaProvider>
    </>
  );
}

export default App
