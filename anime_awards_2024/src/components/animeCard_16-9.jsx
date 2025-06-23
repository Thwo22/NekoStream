{/*IMPORTANTE!! Este anime card é diferente do AnimeCard convencional do site, ele foi especialmente feito para a sessão "Em alta" porque eu quis dar uma diferenciada no layout do site, ele faz quase tudo que o animeaCard vertical faz, a diferença é que suas proporções são diferentes, resumindo, esse é um animeCard Horizontal.*/}
import styles from "./modulos_css/animecards_16-9.module.css"
import play from "../assets/icones/play.png"
import React, { useRef } from "react"

{/*props abertas*/}
function AnimeCard({ title, imageUrl, videoUrl, episodeos,}) {
    const iframeRef = useRef(null);
    const [isHovered, setIsHovered] = React.useState(false);

    {/*aqui é basicamente um espaço onde eu posso colocar um vídeo, ou trailer que represente os animes da minha sessão em alta (iframe)*/}
    const getEmbedUrl = (url) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
        if (!match) return null;
        const videoId = match;
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
    };

    const embedUrl = getEmbedUrl(videoUrl);
    
    {/*aviso também presente no animeCard VERTICAL, o site não exibe animes!*/}
    const aviso = () => {
        alert("Desculpe! O site é apenas uma inteface!")
    };

    {/*Se o mouse estiver passando por cima do AnimeCard, o video iframe dentro vai começar a rodar (sem som)*/}
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
                        <button className={styles.play_button}><img src={play} alt="play image" onClick={aviso} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;