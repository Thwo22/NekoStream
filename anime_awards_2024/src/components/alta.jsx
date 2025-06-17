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
    ]
    return (
            <div className={`${styles.sessao} ${styles.sessaoAlta}`}>
            <h2>Em Alta</h2>
            <div className={styles.animes_da_sessao} ref={scrollRef}>
                <div className={styles.wrapper}>
                    <NavigationButtons scrollRef={scrollRef} />
                </div>
                {animesAlta.map((anime) => (
                    <AnimeCard
                        key={anime.id}
                        title={anime.title}
                        imageUrl={anime.imageUrl}
                        videoUrl={anime.videoUrl}
                        episodeos={anime.episodeos}
                        />
                ))}
            </div>
        </div>
    );
}

export default SessaoAlta;