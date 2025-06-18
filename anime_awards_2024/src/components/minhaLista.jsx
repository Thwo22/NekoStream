import React, { useRef } from "react";
import styles from "./modulos_css/sessoes.module.css";
import AnimeCard from "./AnimeCard";
import NavigationButtons from "./BotoesPrevNext";
import { useMinhaLista } from "./contexts/minhaListacontext";


function SessaoLista() {

    const { minhaLista } = useMinhaLista();
    console.log("minhaLista renderizando...", minhaLista);
    const scrollRef = useRef();

    if (minhaLista.length === 0) return null;

    return (
        <div className={`${styles.sessao} ${styles.sessaoLista}`}>
            <h2>Sua Lista</h2>
            <div className={styles.animes_da_sessao} ref={scrollRef}>
                <div className={styles.wrapper}>
                    <NavigationButtons scrollRef={scrollRef} />
                </div>
                {minhaLista.map((anime) => (
                    <AnimeCard
                        key={anime.id}
                        id={anime.id}
                        title={anime.title}
                        imageUrl={anime.imageUrl}
                        sinopse={anime.sinopse}
                        />
                ))}
            </div>
        </div>
    );
}

export default SessaoLista;