import styles from "./modulos_css/animecards.module.css"
import play from "../assets/icones/play.png"
import salvar from "../assets/icones/salvar.png"
import remover from "../assets/icones/remover.png"
import { useMinhaLista } from "./contexts/minhaListacontext";

function AnimeCard({id, title, imageUrl, sinopse}) {

    const { minhaLista, adicionarAnime, removerAnime} = useMinhaLista();

    const estaNaLista = minhaLista.some((anime) => anime.id === id);

    const aviso = () => {
        alert("Desculpe! O site é apenas uma inteface!")
    };

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

    return (
        <div className={styles.anime_card}>
            <img src={imageUrl} alt="imagem do anime" />
            <p className={styles.anime_title}>{title}</p>
            <div className={styles.info}>
                <p>{title}</p>
                <span className={styles.info_anime}>{sinopse}</span>
                <div className={styles.controles}>
                    <button className={styles.play_button}><img src={play} alt="play image" onClick={aviso}/></button>
                    <button className={styles.addList_button} onClick={handleClick} title={estaNaLista ? "Remover da lista" : "Adicionar a Sua Lista"}>
                    {estaNaLista ? (
                        <img src={remover} alt="Remover da lista" />
                    ) : (
                        <img src={salvar} alt="salvar image" />
                    )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AnimeCard;