import React, { useRef } from "react";
import AnimeCard from "./AnimeCard";
import styles from "./modulos_css/sessoes.module.css"
import NavigationButtons from "./BotoesPrevNext";

function SessaoRomance() {

    const scrollRef = useRef();

    const animesRomance = [
        {id: 1, title: "Your Life In April", imageUrl: "https://i.pinimg.com/736x/1d/dd/4e/1ddd4e18fd88ff7331d958e1a6ce7482.jpg", sinopse: "Um jovem pianista prodígio, traumatizado pela perda da mãe, redescobre a música e o amor ao conhecer uma violinista vibrante."},
        {id: 2, title: "Toradora!", imageUrl: "https://i.pinimg.com/736x/da/b2/5c/dab25ce8213fc64618cd7d49d32f806d.jpg", sinopse: "Um garoto de aparência assustadora e uma garota feroz formam uma aliança para ajudar um ao outro com seus respectivos crushes e se aproximam no processo."},
        {id: 3, title: "Clannad", imageUrl: "https://i.pinimg.com/736x/30/17/57/30175704a06585d46f59f9057c2944c6.jpg", sinopse: "Um estudante sem rumo conhece uma garota frágil e juntos enfrentam os desafios da juventude, da amizade e da vida adulta com muito drama."},
        {id: 4, title: "Fruit Basket", imageUrl: "https://i.pinimg.com/736x/5a/b4/83/5ab483e069b34784ef673f4aca99180e.jpg", sinopse: "Após perder os pais, uma garota começa a viver com uma família que guarda um segredo: eles se transformam em animais do zodíaco chinês."},
        {id: 5, title: "Kimi no Todoke", imageUrl: "https://i.pinimg.com/736x/6e/e1/c8/6ee1c873bfec2770a5369a0d3305c923.jpg", sinopse: "Sawako é tímida e incompreendida por parecer assustadora, mas sua vida muda quando um garoto popular começa a se aproximar dela."},
        {id: 6, title: "Horimiya", imageUrl: "https://i.pinimg.com/736x/44/59/af/4459af8d05489846c1fb5c64072855cb.jpg", sinopse: "Hori, a aluna popular, e Miyamura, o quieto cheio de piercings e tatuagens, descobrem lados ocultos um do outro e se apaixonam de forma natural."},
        {id: 7, title: "Ao Haru Ride", imageUrl:"https://i.pinimg.com/736x/3d/51/87/3d51876ceb354692cf6f606bdc706437.jpg", sinopse: "Futaba quer recomeçar sua vida no ensino médio e reencontra seu primeiro amor, mas ele mudou tanto quanto ela."},
        {id: 8, title: "Lovely Complex", imageUrl: "https://i.pinimg.com/736x/50/6e/27/506e27aaafe9beb689691c5f2559bf0e.jpg", sinopse: "Uma garota alta e um garoto baixo vivem brigando, mas suas diferenças se tornam o que mais os aproxima."},
        {id: 9, title: "My Dress-up Darling", imageUrl: "https://i.pinimg.com/736x/aa/3d/c4/aa3dc4e546e872bb29f9660752ecf317.jpg", sinopse: "Um garoto tímido que costura roupas para bonecas se une a uma colega extrovertida que ama cosplay e os dois crescem juntos em confiança e afeto."},
        {id: 10, title: "Kamisama Kiss", imageUrl: "https://i.pinimg.com/736x/d1/f5/90/d1f590b105db3549118ed8b68bcabd7a.jpg", sinopse: "Após ser despejada, uma garota se torna deusa local de um templo e passa a conviver com seres sobrenaturais incluindo um espírito raposa arrogante (e charmoso)."},
    ]
    return (
            <div className={`${styles.sessao} ${styles.sessaoRomance}`}>
            <h2>Romance</h2>
            <div className={styles.animes_da_sessao} ref={scrollRef}>
                <div className={styles.wrapper}>
                    <NavigationButtons scrollRef={scrollRef} />
                </div>
                {animesRomance.map((anime) => (
                    <AnimeCard
                        key={anime.id}
                        title={anime.title}
                        imageUrl={anime.imageUrl}
                        sinopse={anime.sinopse}
                        />
                ))}
            </div>
        </div>
    );
}

export default SessaoRomance;