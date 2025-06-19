import React, { useRef } from "react";
import styles from "./modulos_css/sessoes.module.css";
import AnimeCard from "./AnimeCard";
import NavigationButtons from "./BotoesPrevNext";
import { useMinhaLista } from "./contexts/minhaListacontext";

function SessaoLista() {
    const { minhaLista } = useMinhaLista();
    const scrollRef = useRef();

    return (
    <div className={`${styles.sessao} ${styles.sessaoLista}`}>
    <h2>Sua Lista</h2>
    <NavigationButtons scrollRef={scrollRef} />
    <div className={styles.wrapper}></div>
    {minhaLista.length === 0 ? (
        <p className={styles.listaVazia}>
            Você ainda não Adicionou animes à Lista.
        </p>
    ) : (
        <div className={styles.animes_da_sessao} ref={scrollRef}>
            
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
    )}
    </div>
);
}

export default SessaoLista;
