import React from "react";
import AnimeCard from "./AnimeCard";
import styles from "./modulos_css/populares.module.css"

function SessaoPopulares() {
    const animesPopulares = [
        {id: 1, title: "Naruto", imageUrl: "https://i.pinimg.com/736x/ea/5b/05/ea5b0593cb6c882ba7898f06045a6fb0.jpg"},
        {id: 2, title: "One Piece", imageUrl: "https://i.pinimg.com/736x/03/29/91/03299109b05bee26d709a811ef93c064.jpg"},
        {id: 3, title: "Dragon Ball Z", imageUrl: "https://i.pinimg.com/736x/a3/28/53/a32853f947f5118ad331242c31b3a39a.jpg"},
        {id: 4, title: "Bleach", imageUrl: "https://i.pinimg.com/736x/46/c2/97/46c2973d29009fb6c884acef189af24f.jpg"},
        {id: 5, title: "Attack On Titan", imageUrl: "https://i.pinimg.com/736x/25/cb/b1/25cbb1ef208c9d95c01289c25cb36f57.jpg"},
        {id: 6, title: "My Hero Academia", imageUrl: "https://i.pinimg.com/736x/c2/42/1e/c2421ebc4be52491b1ecfdb3a40dda83.jpg"},
        {id: 7, title: "Fullmetal Alchemist: Brotherhood", imageUrl:"https://i.pinimg.com/736x/80/ca/76/80ca7667e392a59bf7732cafd62a9cce.jpg"},
        {id: 8, title: "Demon Slayer", imageUrl: "https://i.pinimg.com/736x/c6/c2/05/c6c20595519e607ee5ab352796d133d8.jpg"},
        {id: 9, title: "Jujutsu Kaisen", imageUrl: "https://i.pinimg.com/736x/dc/c9/e8/dcc9e864d6f71e7746aef6d5b99dc31d.jpg"},
        {id: 10, title: "Jojo´s Bizarre Adventure", imageUrl: "https://i.pinimg.com/736x/d2/20/44/d220449638e55c256e15a185331f4dbe.jpg"},
    ]
    return (
        <div className={styles.sessaoPopulares}>
            <h2>Popular</h2>
            <div className={styles.animes_da_sessao}>
                {animesPopulares.map((anime) => (
                    <AnimeCard
                        key={anime.id}
                        title={anime.title}
                        imageUrl={anime.imageUrl}
                        />
                ))}
            </div>
        </div>
    );
}

export default SessaoPopulares;