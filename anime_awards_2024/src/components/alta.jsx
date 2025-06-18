import React, { useRef } from "react";
import AnimeCard from "./animeCard_16-9";
import styles from "./modulos_css/sessoes.module.css";
import NavigationButtons from "./BotoesPrevNext";

function SessaoAlta() {

    const scrollRef = useRef();

    const animesAlta = [
        {id: 1, 
        title: "One Piece",
        imageUrl: "https://i.pinimg.com/736x/8d/03/77/8d03776ad5efaa49c3d9c39a4e4558ae.jpg", 
        videoUrl: "https://youtu.be/PG2GLkqeMYM?si=ScqoGj7ChAJ6BAH7",
        episodeos: "1133 Episódeos"
        },

        {id: 2, 
        title: "My Hero Academia: Vigilants", 
        imageUrl: "https://i.pinimg.com/736x/06/7a/5e/067a5e6644a58701c218b6e77f339be2.jpg", 
        videoUrl: "https://youtu.be/tU092KyDmco?si=PpZaKNtyAnrhpEgx",
        episodeos: "1 Temporada"
        },

        {id: 3, 
        title: "Blue Lock",
        imageUrl: "https://i.pinimg.com/736x/e2/eb/3e/e2eb3eb52759c7e3dfaf2f34131b64dc.jpg",
        videoUrl:"https://youtu.be/XA_RdwHwb-c?si=lBzWrkHAlLIsL4gk",
        episodeos: "2 Temporadas"
        },

        {id: 4, 
        title: "Solo Leveling",
        imageUrl: "https://i.pinimg.com/736x/2c/0e/b2/2c0eb2fe6cb38ba1c8568238add79862.jpg", 
        videoUrl:"https://youtu.be/MWrsQmBIkhM?si=U0n2rXwajnHIENfv",
        episodeos: "2 Temporadas"
        },

        {id: 5,
        title: "My Hero Academia",
        imageUrl: "https://i.pinimg.com/736x/55/be/e4/55bee486b20189a4b58d198e89d8b040.jpg", 
        videoUrl:"https://youtu.be/L1FdEBTJXus?si=CYahR4uQI0yRqDWX",
        episodeos: "8 Temporadas",
        },
    ];

    const imagensVertical = {
        1: "https://i.pinimg.com/736x/03/29/91/03299109b05bee26d709a811ef93c064.jpg",
        2: "https://i.pinimg.com/736x/9e/65/74/9e65749202ce0af59ef4c6ada4aaff22.jpg",
        3: "https://i.pinimg.com/736x/86/95/eb/8695eb4bd868dafedd7ea7912393ce06.jpg",
        4: "https://i.pinimg.com/736x/86/24/4f/86244f757e85a2baadbb08087b9f10b7.jpg",
        5: "https://i.pinimg.com/736x/c2/42/1e/c2421ebc4be52491b1ecfdb3a40dda83.jpg",
    }
    return (
            <div className={`${styles.sessao} ${styles.sessaoAlta}`}>
            <h2>Em Alta</h2>
            <div className={styles.animes_da_sessao} ref={scrollRef}>
                <div className={styles.wrapper}>
                    <NavigationButtons scrollRef={scrollRef} />
                </div>

                {animesAlta.map((anime) => {
                    const imagensVerticais = imagensVertical[anime.id];
                
                    return (
                        <AnimeCard
                            key={anime.id}
                            id={anime.id}
                            title={anime.title}
                            imageUrl={anime.imageUrl}
                            videoUrl={anime.videoUrl}
                            episodeos={anime.episodeos}
                            imagensVertical={imagensVerticais[anime.id]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default SessaoAlta;