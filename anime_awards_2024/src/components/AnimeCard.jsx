{/*!!este é um componente importarte!! basicamente, ele é um card, onde ficará as informações de cada um dos animes do site, como título, sinopse, imagem, id, etc... Todas essas informações são passadas como props para as sessções que usam o card no estilo vertical. E essas sessões por sua vez, Definem o valor de cada um desses props.*/}

import styles from "./modulos_css/animecards.module.css"
import play from "../assets/icones/play.png"
import salvar from "../assets/icones/salvar.png"
import remover from "../assets/icones/remover.png"
import { useMinhaLista } from "./contexts/minhaListacontext";

{/*props "abertas"*/}
function AnimeCard({id, title, imageUrl, sinopse}) {
    {/*esta é um useState usada para adicionar ou removr um anime da sessão Sua Lista */}
    const { minhaLista, adicionarAnime, removerAnime} = useMinhaLista();

    {/*verifica se o anime esta na lista pelo seu respectivo ID*/}
    const estaNaLista = minhaLista.some((anime) => anime.id === id);

    {/*Função de aviso caso o usuário tente reproduzir algum anime, o site nao tem esse intuito!*/}
    const aviso = () => {
        alert("Desculpe! O site é apenas uma inteface!")
    };

    {/*função responsável por adicionar ou remover animes da sessão SUA LISTA*/}
    const handleClick = () => {
        console.log("Clicado!", title);

        if (estaNaLista) {
            console.log ("Removendo...");
            removerAnime(id);
        } else {
            console.log("Adicionando...");
            adicionarAnime({id, title, imageUrl, sinopse});
        }

        console.log("lista atual:", MinhaLista);
    };

    {/*Diferente das outras sessões do site, essa é uma sessão completamente vazia, só ganhará os animes que você decidir colocar nela!*/}
    return (
        <div className={styles.anime_card}>
            <img src={imageUrl} alt="imagem do anime" />
            <p className={styles.anime_title}>{title}</p>
            <div className={styles.info}>
                <p>{title}</p>
                <span className={styles.info_anime}>{sinopse}</span>
                <div className={styles.controles}>
                    <button className={styles.play_button}><img src={play} alt="play image" onClick={aviso}/></button> {/*chamada para a função de aviso!*/}
                    <button className={styles.addList_button} onClick={handleClick} title={estaNaLista ? "Remover da lista" : "Adicionar a Sua Lista"}> {/*chamada para a função de adicionar anime a lista ou remover.*/}
                    {estaNaLista ? (
                        <img src={remover} alt="Remover da lista" /> 
                    ) : (
                        <img src={salvar} alt="salvar image" />
                    )}
                    </button>{/*acima, está o botão que muda dinamicamente de acordo com o estado da lista, se o anime ja estiver na sua lista, sua função é trocada de "adicionar" para "remover" e o ícone muda para sinalizar isso!*/}
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;