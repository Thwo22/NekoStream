import React, { useRef } from "react";
import styles from "./modulos_css/sessoes.module.css";
import AnimeCard from "./AnimeCard";
import NavigationButtons from "./BotoesPrevNext";


function SessaoComedia() {

    const scrollRef = useRef();

    const animesComedia = [
        {id: 1, title: "Gintama", imageUrl: "https://i.pinimg.com/736x/24/96/7e/24967e88b590aba23e8afce845cb2148.jpg", sinopse: "Em um Japão feudal invadido por alienígenas, o samurai preguiçoso Gintoki vive situações absurdas com sua trupe, misturando ação e humor escrachado.."},
        {id: 2, title: "Konosuba", imageUrl: "https://i.pinimg.com/736x/9f/17/c7/9f17c7a60792404764635da9fdac07ae.jpg", sinopse: "Após morrer, Kazuma renasce em um mundo de fantasia com a deusa Aqua e juntos enfrentam monstros, dívidas e fracassos hilários."},
        {id: 3, title: "Nichijou", imageUrl: "https://i.pinimg.com/736x/68/c7/ce/68c7ce97c5fa5c9083ca5ae8c25b0d55.jpg", sinopse: "A vida cotidiana de três amigas e outros personagens excêntricos se transforma em situações surreais e hilariamente exageradas."},
        {id: 4, title: "Life of Saiki K", imageUrl: "https://i.pinimg.com/736x/4d/ce/1f/4dce1f579147776f302d7a472b3e7ac7.jpg", sinopse: "Saiki é um estudante com poderes psíquicos incríveis, mas só quer ter uma vida normal o problema são as pessoas ao seu redor."},
        {id: 5, title: "Kaguya: Love is War", imageUrl: "https://i.pinimg.com/736x/cb/37/6b/cb376b9ddf33b06549c9db84d359bd75.jpg", sinopse: "Dois gênios do conselho estudantil se amam, mas são orgulhosos demais para confessar, então travam batalhas mentais para forçar o outro a se declarar"},
        {id: 6, title: "i´m Sakamoto", imageUrl: "https://i.pinimg.com/736x/12/7f/38/127f38e9ea70ecc87fff4bae3a5e787e.jpg", sinopse: "Sakamoto é o aluno perfeito em tudo o que faz até suas quedas são estilosas, o que gera inveja, admiração e situações cômicas."},
        {id: 7, title: "Asobe Asobase", imageUrl:"https://i.pinimg.com/736x/ea/4f/1c/ea4f1c11c55a39be5a8d90607b34d1a8.jpg", sinopse: "Três garotas formam um “clube de jogos” escolar e se envolvem em brincadeiras malucas, com um humor caótico e imprevisível."},
        {id: 8, title: "Grand Blue", imageUrl: "https://i.pinimg.com/736x/42/31/06/42310628b1b73206dd271071d98d7f5d.jpg", sinopse: "Iori começa a faculdade perto da praia e é arrastado para a vida de mergulho, festas, álcool e maluquices com amigos exagerados."},
        {id: 9, title: "Prison School", imageUrl: "https://i.pinimg.com/736x/0f/95/57/0f9557942553bb14eb72d1a85d48195e.jpg", sinopse: "Cinco garotos entram em uma escola só para garotas e acabam presos por espiar, vivendo situações absurdas entre punições e fan service extremo."},
        {id: 10, title: "Bellzebub", imageUrl: "https://i.pinimg.com/736x/e9/88/15/e988150c48699dd25be15872f61e7754.jpg", sinopse: "Um delinquente do colégio acaba cuidando do bebê do rei dos demônios, que o escolheu para destruir a humanidade."},
    ]
    return (
        <div className={`${styles.sessao} ${styles.sessaoComedia}`}>
            <h2>Comédia</h2>
            <div className={styles.animes_da_sessao} ref={scrollRef}>
                <div className={styles.wrapper}>
                    <NavigationButtons scrollRef={scrollRef} />
                </div>
                {animesComedia.map((anime) => (
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

export default SessaoComedia;