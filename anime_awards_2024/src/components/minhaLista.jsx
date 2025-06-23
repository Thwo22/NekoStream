import React, { useRef, useEffect } from "react";
import styles from "./modulos_css/sessoes.module.css";
import AnimeCard from "./AnimeCard";
import NavigationButtons from "./BotoesPrevNext";
import { useMinhaLista } from "./contexts/minhaListacontext";

function SessaoLista() {
    const { minhaLista } = useMinhaLista();
    const scrollRef = useRef();

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            el.classList.add("grabbing");
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            el.classList.remove("grabbing");
        };

        const handleMouseUp = () => {
            isDown = false;
            el.classList.remove("grabbing");
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 1.5;
            el.scrollLeft = scrollLeft - walk;
        };

        el.addEventListener("mousedown", handleMouseDown);
        el.addEventListener("mouseleave", handleMouseLeave);
        el.addEventListener("mouseup", handleMouseUp);
        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousedown", handleMouseDown);
            el.removeEventListener("mouseleave", handleMouseLeave);
            el.removeEventListener("mouseup", handleMouseUp);
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={`${styles.sessao} ${styles.sessaoLista}`}>
            <h2>Sua Lista</h2>
            {minhaLista.length === 0 ? (
                <p className={styles.listaVazia}>
                    Você ainda não Adicionou animes à Lista.
                </p>
            ) : (
                <>
                    <div className={styles.wrapper}>
                        <NavigationButtons scrollRef={scrollRef} />
                    </div>
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
                </>
            )}
        </div>
    );
}

export default SessaoLista;
