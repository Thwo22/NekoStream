import styles from "./modulos_css/header.module.css"
import nekologo from "../assets/logo.png"
import conta from "../assets/icones/conta_icone.png"
import menu from "../assets/icones/mobile_menu.png"
import { useState } from "react"

function Header() {
    
    const [estaAtivo, setEstaAtivo] = useState(false); /*UseState que altera o estado do menu mobile (hamburguer).*/

    const handleClick = () => {
        setEstaAtivo(prev => !prev);
    } /*ativa e desativa o menu mobile caso disponível*/

    return (
        <div>
            <header className={styles.header}> {/*tag semântica*/}
                <img src={nekologo} alt="Imagem-logo" className={styles.logo_img} />{/*logo do site*/}
                <div className={styles.navs}> {/*navs do header*/}
                    <nav className={`${styles.mobile_menu} ${estaAtivo ? styles.ativo : ""}`}> {/*Classe que ajuda o useState a controlar o menu mobile*/}
                        <ul>
                            <li><a href="#">Conta</a></li>
                            <li><a href="#">Populares</a></li>
                            <li><a href="#">Lançamentos</a></li>
                            <li><a href="#">Minha lista</a></li>
                            <li><a href="#">Favoritos</a></li>
                            <li>
                                <a href="#">Categorias <span className={styles.setinha_emogi}>▼</span></a> {/*esta é uma LI com Dropbox e emogi para sinalizar*/}
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
                    <nav className={styles.desktop_menu}> {/*Menu do Desktop, usada em dispositivos maiores*/}
                        <ul>
                            <li><a href="#">Populares</a></li>
                            <li><a href="#">Lançamentos</a></li>
                            <li><a href="#">Minha lista</a></li>
                            <li><a href="#">Favoritos</a></li>
                            <li>
                                <a href="#">Categorias <span className={styles.setinha_emogi}>▼</span></a> {/*esta é uma LI com Dropbox e emogi para sinalizar*/}
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
                <input type="search" placeholder="Pesquisar Anime"/> {/*input search para pesquisa de animes*/}
                <div className={styles.conta_idioma}>
                    <img src={conta} alt="criar conta imagem" className={`${styles.icones} ${styles.conta}`} /> {/*botão de gerenciamento de contas*/}
                    
                    <img src={menu} alt="mobile menu imagem" className={`${styles.icones} ${styles.menu}`} onClick={handleClick}/> {/*botão disponível somente em dispositivos menores*/}
                </div>
            </header>
        </div>
    )
}

export default Header;