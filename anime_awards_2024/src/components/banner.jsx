import styles from "./modulos_css/banner.module.css"
import bannerNaruto from "../assets/fotos-banner/naruto.jpg"
import logoNatuto from "../assets/fotos-banner/logo-naruto.png"

function Banner() {
    return(
        <div className={styles.box_img}><img src={bannerNaruto} alt="Naruto-banner" />
            <div className={styles.container_logos}>
                <img src={logoNatuto} alt="naruto-logo" />
                <div className={styles.info_banner}>
                    <p>+12</p>
                    <p>SHONEN</p>
                    <p>AVENTURA</p>
                </div>
                <div className={styles.sinopse}>
                    <p>Naruto acompanha a história de Naruto Uzumaki, um jovem ninja que sonha em se tornar o maior líder de sua vila, o Hokage. Marcado desde o nascimento por abrigar dentro de si a poderosa Raposa de Nove Caudas, ele enfrenta o preconceito dos moradores enquanto busca reconhecimento, amizade e força para proteger quem ama.</p>
                </div>
                <div className={styles.container_buttons}>
                    <button className={styles.assistir_btn}>Assistir</button>
                    <button className={styles.episodeos_btn}>Episódeos</button>
                </div>
            </div>

            <div className={styles.animes_buttons}>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Banner