{/*IMPORTANTE!! esse será a unica sessão (fora "sua lista" e "em alta" pois ela é um componente reutilizavel em todas as outras sessões, entendendo ela você entende a base de todas as sessões do site.*/}

import React, { useRef } from "react";
import AnimeCard from "./AnimeCard";
import styles from "./modulos_css/sessoes.module.css"
import NavigationButtons from "./BotoesPrevNext";

function SessaoPopulares() {

    const scrollRef = useRef(); {/*referência para o botão de navegar lateralmente na sessão*/}

    {/*array com props passadas para os cardAnimes verticais que essa sessão esta importando, esse arrays contém todos os dados dos animes dessas sessão*/}
    const animesPopulares = [
        {id: 6, 
            title: "Naruto", 
            imageUrl: "https://i.pinimg.com/736x/ea/5b/05/ea5b0593cb6c882ba7898f06045a6fb0.jpg", 
            sinopse: "Naruto Uzumaki, um jovem ninja rejeitado pela vila por abrigar uma criatura poderosa, busca se tornar Hokage e conquistar o respeito de todos."},
        {id: 7, 
            title: "One Piece", 
            imageUrl: "https://i.pinimg.com/736x/03/29/91/03299109b05bee26d709a811ef93c064.jpg", 
            sinopse: "Monkey D. Luffy parte para os mares com sua tripulação em busca do lendário tesouro One Piece, sonhando se tornar o Rei dos Piratas."},
        {id: 8, 
            title: "Dragon Ball Z", 
            imageUrl: "https://i.pinimg.com/736x/a3/28/53/a32853f947f5118ad331242c31b3a39a.jpg", 
            sinopse: "Goku, um guerreiro saiyajin, protege a Terra enfrentando inimigos cada vez mais fortes, enquanto descobre suas origens e forma laços com seus aliados."},
        {id: 9, 
            title: "Bleach", 
            imageUrl: "https://i.pinimg.com/736x/46/c2/97/46c2973d29009fb6c884acef189af24f.jpg", 
            sinopse: "Ichigo Kurosaki, um adolescente que acidentalmente ganha poderes de Ceifador de Almas, precisa lutar contra espíritos corrompidos e proteger o equilíbrio entre os mundos."},
        {id: 10, 
            title: "Attack On Titan", 
            imageUrl: "https://i.pinimg.com/736x/25/cb/b1/25cbb1ef208c9d95c01289c25cb36f57.jpg", 
            sinopse: "Em um mundo onde a humanidade vive cercada por muralhas, Eren Yeager se junta ao exército para destruir os titãs que devastaram sua cidade."},
        {id: 11, 
            title: "My Hero Academia", 
            imageUrl: "https://i.pinimg.com/736x/c2/42/1e/c2421ebc4be52491b1ecfdb3a40dda83.jpg", 
            sinopse: "Izuku Midoriya nasce sem poderes em um mundo onde todos têm “quirks”, mas herda o dom do maior herói e entra em uma escola para futuros heróis."},
        {id: 12, 
            title: "Fullmetal Alchemist", 
            imageUrl:"https://i.pinimg.com/736x/80/ca/76/80ca7667e392a59bf7732cafd62a9cce.jpg", 
            sinopse: "Após uma tentativa fracassada de ressuscitar a mãe, os irmãos Edward e Alphonse Elric partem em busca da Pedra Filosofal para recuperar seus corpos."},
        {id: 13, 
            title: "Demon Slayer", 
            imageUrl: "https://i.pinimg.com/736x/c6/c2/05/c6c20595519e607ee5ab352796d133d8.jpg", 
            sinopse: "Tanjiro Kamado vê sua família ser morta por demônios e sua irmã virar um deles. Ele entra para a corporação dos caçadores para salvá-la e vingar sua família."},
        {id: 14, 
            title: "Jujutsu Kaisen", 
            imageUrl: "https://i.pinimg.com/736x/dc/c9/e8/dcc9e864d6f71e7746aef6d5b99dc31d.jpg", 
            sinopse: "Yuji Itadori engole um dedo amaldiçoado e se torna hospedeiro de uma entidade poderosa. Agora, precisa aprender feitiçaria para sobreviver e proteger os outros."},
        {id: 15, 
            title: "Jojo´s Bizarre...", 
            imageUrl: "https://i.pinimg.com/736x/d2/20/44/d220449638e55c256e15a185331f4dbe.jpg", 
            sinopse: "Cada geração da família Joestar enfrenta ameaças sobrenaturais e vilões excêntricos, com habilidades únicas e batalhas insanas ao redor do mundo."},
        {id: 16, 
            title: "MHA: Vigilants", 
            imageUrl: "https://i.pinimg.com/736x/9e/65/74/9e65749202ce0af59ef4c6ada4aaff22.jpg", 
            sinopse: "Koichi, um jovem com um quirk simples, age como herói fora da lei ao lado de outros vigilantes, enfrentando ameaças nas sombras da sociedade."},
        {id: 17, 
            title: "Blue Lock", 
            imageUrl: "https://i.pinimg.com/736x/86/95/eb/8695eb4bd868dafedd7ea7912393ce06.jpg", 
            sinopse: "Jovens atacantes disputam entre si em um projeto extremo para criar o melhor camisa 9 do mundo."},
        {id: 18, 
            title: "Solo Leveling", 
            imageUrl: "https://i.pinimg.com/736x/86/24/4f/86244f757e85a2baadbb08087b9f10b7.jpg", 
            sinopse: "Sung Jin-Woo, o caçador mais fraco da Coreia, desperta um poder misterioso que lhe permite evoluir sem limites, e se torna o caçador mais forte do mundo."},
    ]
    {/*esta é a estrutura de todas as sessões, um container com varios cardAnimes em ROW, e um overflow x controlado por botões de navegação*/}
    return (
            <div className={`${styles.sessao} ${styles.sessaoPopular}`}>
            <h2>Popular</h2>

            <div className={styles.wrapper}><NavigationButtons scrollRef={scrollRef} /></div>{/*este é o botão que controla o overflow-x do container*/}
            <div className={styles.animes_da_sessao} ref={scrollRef}>

                {/*map das informações que o componente animecard (vertical) vai renderizar na tela.*/}
                {animesPopulares.map((anime) => (
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

export default SessaoPopulares;