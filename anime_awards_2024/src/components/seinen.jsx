import React, { useRef } from "react";
import styles from "./modulos_css/sessoes.module.css";
import AnimeCard from "./AnimeCard";
import NavigationButtons from "./BotoesPrevNext";


function SessaoSeinen() {

    const scrollRef = useRef();

    const animesSeinen = [
        {id: 16, title: "Berserk", imageUrl: "https://i.pinimg.com/736x/2e/e0/59/2ee0594a38264f5a431e11a294516e2e.jpg", sinopse: "Guts, um guerreiro marcado pela tragédia, enfrenta demônios e seu antigo amigo traidor em um mundo brutal de guerra e escuridão."},
        {id: 17, title: "Tokyo Ghoul", imageUrl: "https://i.pinimg.com/736x/a5/b1/bf/a5b1bf9fa874c03d684ca0bcd86821eb.jpg", sinopse: "Após um encontro com uma criatura devoradora de humanos, Kaneki se transforma em meio-ghoul e precisa sobreviver entre dois mundos em conflito."},
        {id: 18, title: "Psycho-Pass", imageUrl: "https://i.pinimg.com/736x/cc/b2/67/ccb267cd1894ffb6f6ce42f561a1f85a.jpg", sinopse: "Em um futuro onde o estado mental das pessoas define seu destino, uma investigadora questiona o sistema ao lidar com crimes e moralidade."},
        {id: 19, title: "Monster", imageUrl: "https://i.pinimg.com/736x/43/20/d4/4320d46ca10ec0746a8156ccd0dfe49d.jpg", sinopse: "Um neurocirurgião salva a vida de um garoto que se torna um assassino em série, e parte em uma jornada para detê-lo e expiar sua culpa."},
        {id: 20, title: "Vinland Saga", imageUrl: "https://i.pinimg.com/736x/f7/a3/a8/f7a3a819b9abd49c301bb3daa724869d.jpg", sinopse: "Thorfinn, um jovem viking, busca vingança contra o homem que matou seu pai, enquanto se envolve em batalhas épicas e questiona o verdadeiro significado da guerra."},
        {id: 21, title: "Neon Genesis", imageUrl: "https://i.pinimg.com/736x/5c/c0/ec/5cc0ec775b15933f5bd64c3b246d7e6b.jpg", sinopse: "Adolescentes pilotam mechas para enfrentar criaturas misteriosas, enquanto lidam com traumas profundos e revelações existenciais."},
        {id: 22, title: "Parasyte", imageUrl:"https://i.pinimg.com/736x/6c/b6/07/6cb607b07a20d06700275652a7086c07.jpg", sinopse: "Um estudante tem sua mão dominada por um parasita alienígena e, juntos, enfrentam outros parasitas que ameaçam a humanidade."},
        {id: 23, title: "Black Lagoon", imageUrl: "https://i.pinimg.com/736x/7e/58/5f/7e585fb6b15c984ef3408a3b40bfacd2.jpg", sinopse: "Um grupo de mercenários faz trabalhos ilegais nos mares do sudeste asiático, enquanto um ex-executivo japonês se adapta à vida fora da lei."},
        {id: 24, title: "Hellsing", imageUrl: "https://i.pinimg.com/736x/58/e7/06/58e706dcb4c9a33efd424b6aa997d6f9.jpg", sinopse: "A organização Hellsing combate criaturas sobrenaturais na Inglaterra com a ajuda de Alucard, um vampiro poderoso e implacável."},
        {id: 25, title: "Death Note", imageUrl: "https://i.pinimg.com/736x/55/b7/b6/55b7b67b9cf06a61ab5616c45c1d47f0.jpg", sinopse: "Light Yagami encontra um caderno que mata qualquer pessoa cujo nome for escrito nele, e inicia uma guerra de inteligência contra o detetive L."},
    ]
    return (
        <div className={`${styles.sessao} ${styles.sessaoSeinen}`}>
            <h2>Seinen</h2>
            <div className={styles.animes_da_sessao} ref={scrollRef}>
                <div className={styles.wrapper}>
                    <NavigationButtons scrollRef={scrollRef} />
                </div>
                {animesSeinen.map((anime) => (
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

export default SessaoSeinen;