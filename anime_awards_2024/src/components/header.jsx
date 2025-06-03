import styles from "./modulos_css/header.module.css"
import nekologo from "../assets/logo.png"
import idioma from "../assets/icones/idioma_icone.png"
import conta from "../assets/icones/conta_icone.png"

function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={nekologo} alt="Imagem-logo" className={styles.logo_img} />
                <div className={styles.navs}>
                    <nav>Filmes</nav>
                    <nav>Populares</nav>
                    <nav>Lançamentos</nav>
                    <nav>Minha Lista</nav>
                    <nav>Favoritos</nav>
                    <nav>Categorias</nav>
                </div>
                <input type="search" placeholder="Pesquisar Anime"/>
                <div className={styles.conta_idioma}>
                    <img src={conta} alt="" className={styles.icones}/>
                    <img src={idioma} alt="" className={styles.icones}/>
                </div>
            </header>
        </div>
    )
}

export default Header;