import styles from "./modulos_css/animecards.module.css"

function AnimeCard({title, imageUrl}) {
    return (
        <div className={styles.anime_card}>
            <img src={imageUrl} alt="imagem do anime" />
            <span className={styles.anime_title}>{title}</span>
        </div>
    )
}

export default AnimeCard;