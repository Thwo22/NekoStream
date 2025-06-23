import styles from "./modulos_css/header.module.css"
import nekologo from "../assets/logo.png"
import idioma from "../assets/icones/idioma_icone.png"
import conta from "../assets/icones/conta_icone.png"
import menu from "../assets/icones/mobile_menu.png"
import { useState } from "react"

function Header() {
    
    const [estaAtivo, setEstaAtivo] = useState(false);

    const handleClick = () => {
        setEstaAtivo(prev => !prev);
    }
    return (
        <div>
            <header className={styles.header}>
                <img src={nekologo} alt="Imagem-logo" className={styles.logo_img} />
                <div className={styles.navs}>
                    <nav className={`${styles.mobile_menu} ${estaAtivo ? styles.ativo : ""}`}>
                        <ul>
                            <li><a href="#">Conta</a></li>
                            <li><a href="#">Populares</a></li>
                            <li><a href="#">Lançamentos</a></li>
                            <li><a href="#">Minha lista</a></li>
                            <li><a href="#">Favoritos</a></li>
                            <li>
                                <a href="#">Categorias <span className={styles.setinha_emogi}>▼</span></a>
                                <ul className={styles.dropdown}>
                                    <li>Shounen</li>
                                    <li>Seinen</li>
                                    <li>Isekai</li>
                                    <li>Romance</li>
                                    <li>Comédia</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className={styles.desktop_menu}>
                        <ul>
                            <li><a href="#">Populares</a></li>
                            <li><a href="#">Lançamentos</a></li>
                            <li><a href="#">Minha lista</a></li>
                            <li><a href="#">Favoritos</a></li>
                            <li>
                                <a href="#">Categorias <span className={styles.setinha_emogi}>▼</span></a>
                                <ul className={styles.dropdown}>
                                    <li>Shounen</li>
                                    <li>Seinen</li>
                                    <li>Isekai</li>
                                    <li>Romance</li>
                                    <li>Comédia</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <input type="search" placeholder="Pesquisar Anime"/>
                <div className={styles.conta_idioma}>
                    <img src={conta} alt="criar conta imagem" className={`${styles.icones} ${styles.conta}`} />
                    
                    <img src={menu} alt="mobile menu imagem" className={`${styles.icones} ${styles.menu}`} onClick={handleClick}/>
                </div>
            </header>
        </div>
    )
}

export default Header;