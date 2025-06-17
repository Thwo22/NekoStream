import React, { useRef } from "react";
import AnimeCard from "./animeCard_16-9";
import styles from "./modulos_css/sessoes.module.css";
import NavigationButtons from "./BotoesPrevNext";
import doze from "../assets/icones/doze_anos.jpeg";
import quatorze from "../assets/icones/quatorze_anos.jpeg";
import dezesseis from "../assets/icones/dezesseis_anos.jpeg";

function SessaoAlta() {

    const scrollRef = useRef();

    const animesAlta = [
        {id: 1, 
        title: "One Piece",
        imageUrl: "https://i.pinimg.com/736x/8d/03/77/8d03776ad5efaa49c3d9c39a4e4558ae.jpg", 
        videoUrl: "https://youtu.be/PG2GLkqeMYM?si=ScqoGj7ChAJ6BAH7",
        genero: ["•Aventura", "•Shounen", "•Comédia"],
        idade: doze,
        },

        {id: 2, 
        title: "My Hero Academia: Vigilants", 
        imageUrl: "https://i.pinimg.com/736x/06/7a/5e/067a5e6644a58701c218b6e77f339be2.jpg", 
        videoUrl: "https://youtu.be/tU092KyDmco?si=PpZaKNtyAnrhpEgx",
        genero: ["•Luta", "•Shounen", "•Herói"],
        idade: dezesseis,
        },

        {id: 3, 
        title: "Blue Lock",
        imageUrl: "https://i.pinimg.com/736x/e2/eb/3e/e2eb3eb52759c7e3dfaf2f34131b64dc.jpg",
        videoUrl:"https://youtu.be/XA_RdwHwb-c?si=lBzWrkHAlLIsL4gk",
        genero: ["•Esporte", "•Shounen"],
        idade: quatorze,
        },

        {id: 4, 
        title: "Solo Leveling",
        imageUrl: "https://i.pinimg.com/736x/2c/0e/b2/2c0eb2fe6cb38ba1c8568238add79862.jpg", 
        videoUrl:"https://youtu.be/MWrsQmBIkhM?si=U0n2rXwajnHIENfv",
        genero: ["•Magia", "•Shounen"],
        idade: dezesseis,
        },

        {id: 5,
        title: "My Hero Academia",
        imageUrl: "https://i.pinimg.com/736x/55/be/e4/55bee486b20189a4b58d198e89d8b040.jpg", 
        videoUrl:"https://youtu.be/L1FdEBTJXus?si=CYahR4uQI0yRqDWX",
        genero: ["•Shounen", "•Luta", "•Herói"],
        idade: quatorze
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
                        genero={anime.genero}
                        idade={anime.idade}
                        />
                ))}
            </div>
        </div>
    );
}

export default SessaoAlta;