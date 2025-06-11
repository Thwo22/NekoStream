import styles from "./modulos_css/animecards.module.css"
import play from "../assets/icones/play.png"
import salvar from "../assets/icones/salvar.png"

function AnimeCard({title, imageUrl, sinopse}) {
    return (
        <div className={styles.anime_card}>
            <img src={imageUrl} alt="imagem do anime" />
            <span className={styles.anime_title}>{title}</span>
            <div className={styles.info}>
                <p>{title}</p>
                <span className={styles.info_anime}>{sinopse}</span>
                <div className={styles.controles}>
                    <button className={styles.play_button}><img src={play} alt="play image" /></button>
                    <button className={styles.addList_button}><img src={salvar} alt="salvar image"/></button>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;