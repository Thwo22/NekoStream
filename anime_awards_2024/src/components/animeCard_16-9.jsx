import styles from "./modulos_css/animecards_16-9.module.css"
import play from "../assets/icones/play.png"
import salvar from "../assets/icones/salvar.png"
import React, { useRef } from "react"

function AnimeCard({title, imageUrl, videoUrl, episodeos}) {
    const iframeRef = useRef(null);
    const [isHovered, setIsHovered] = React.useState(false);

    const getEmbedUrl = (url) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
        if (!match) return null;
        const videoId = match;
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
    };

    const embedUrl = getEmbedUrl(videoUrl);

    return (
        <div className={styles.anime_card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <div className={styles.media_wrapper}>
                <img 
                    src={imageUrl} 
                    alt="imagem do anime" 
                    className={`${styles.thumbnail} ${isHovered ? styles.hidden : ""}`}
                />
                {embedUrl && isHovered && (
                    <iframe
                        ref={iframeRef}
                        src={embedUrl}
                        className={styles.video_preview}
                        allow="autoplay, encrypted-media"
                        frameBorder="0"
                        allowFullScreen
                        title={title}
                    />
                )}
                
            </div>

            <div className={styles.info}>

                <div className={styles.title_controles_episodeos}>
                    <div><p className={styles.title}>{title}</p></div>
                    <p className={styles.episodeos}>{episodeos}</p>
                    <div className={styles.controles}>
                        <button className={styles.play_button}><img src={play} alt="play image" /></button>
                        <button className={styles.addList_button}><img src={salvar} alt="salvar image"/></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AnimeCard;