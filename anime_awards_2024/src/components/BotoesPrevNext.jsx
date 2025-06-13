import React, {useEffect, useState} from "react"
import styles from "./modulos_css/botoes.module.css"
import prev_button from "../assets/icones/prev_button.png"
import next_button from "../assets/icones/next_button.png"

function NavigationsButtons({scrollRef, scrollAmout = 620}) {

    const [comeco, setComeco] = useState(true);
    const [fim, setFim] = useState(false);

    const checaPosicaodoScroll = () => {
        if (!scrollRef?.current) return;

        const el = scrollRef.current;
        const scrollLeft = el.scrollLeft;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        setComeco(scrollLeft <= 0);
        setFim(scrollLeft >= maxScrollLeft - 5);
    };

    useEffect (() => {
        const el = scrollRef?.current;
        if (!el) return;

        checaPosicaodoScroll();

        el.addEventListener("scroll", checaPosicaodoScroll);
        window.addEventListener("resize", checaPosicaodoScroll);

        return () => {
            el.removeEventListener("scroll", checaPosicaodoScroll);
            window.removeEventListener("resize", checaPosicaodoScroll);
        };
    }, [scrollRef]);

    const handlePrevClick = () => {
        if (scrollRef?.current) {
            scrollRef.current.scrollBy({left: -scrollAmout, behavior: "smooth"});
        }
    };

    const handleNextClick = () => {
        if (scrollRef?.current) {
            scrollRef.current.scrollBy({ left: scrollAmout, behavior: "smooth"});
        }
    };

    return (
        <div className={styles.navigationButtons}>
            {!comeco && (
                <button className={styles.prev_button} onClick={handlePrevClick}>
                    <img src={prev_button} alt="botao de voltar" />
                </button>
            )}

            {!fim && (
                <button className={styles.next_button} onClick={handleNextClick}>
                    <img src={next_button} alt="botao de avançar" />
                </button>
            )}
        </div>
    );
}

export default NavigationsButtons