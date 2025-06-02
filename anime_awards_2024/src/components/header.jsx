import styles from "./modulos_css/header.module.css"

function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src="" alt="Imagem-logo" />
                <div className={styles.navs}>
                    <nav>Filmes</nav>
                    <nav>Populares</nav>
                    <nav>Lançamentos</nav>
                    <nav>Minha Lista</nav>
                    <nav>Favoritos</nav>
                    <nav>Categorias</nav>
                </div>
                <input type="search" placeholder="Pesquisar Anime"/>
                <div>
                    <img src="" alt="" className={styles.icones}/>
                    <img src="" alt="" className={styles.icones}/>
                </div>
            </header>
        </div>
    )
}

export default Header;