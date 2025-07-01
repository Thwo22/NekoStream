import styles from "./modulos_css/banner.module.css"
import bannerNaruto from "../assets/fotos-banner/naruto.jpg"
import bannerJujutsu from "../assets/fotos-banner/jujutsu.jpg"
import bannerJojo from "../assets/fotos-banner/jojo.jpg"
import bannerDbz from "../assets/fotos-banner/dbz.jpg"

import logoNaruto from "../assets/fotos-banner/logo-naruto.png"
import logoJujutsu from "../assets/fotos-banner/logo-jujutsu.png"
import logoJojo from "../assets/fotos-banner/logo-jojos.png"
import logoDbz from "../assets/fotos-banner/logo-dbz.png"
import { useEffect, useState } from "react"

const bannerData = [
    {
        id: 0,
        logoImg: logoNaruto,
        classLogo: styles.naruto_logo,
        age: "+12",
        genres: ["SHONEN", "AVENTURA"],
        sinopse:
        "Naruto acompanha a história de Naruto Uzumaki, um jovem ninja que sonha em se tornar o maior líder de sua vila, o Hokage.",
    },
    {
        id: 1,
        logoImg: logoJujutsu,
        classLogo: styles.jujutsu_logo,
        age: "+16",
        genres: ["SHONEN", "AÇÃO", "FANTASIA"],
        sinopse:
        "Yuji Itadori, um estudante do ensino médio, se envolve com o mundo das maldições e se torna hospedeiro de Sukuna, um poderoso espírito amaldiçoado. ",
    },
    {
        id: 2,
        logoImg: logoJojo,
        classLogo: styles.jojos_logo,
        age: "+14",
        genres: ["AVENTURA", "SOBRENATURAL"],
        sinopse:
        "JoJo's Bizarre Adventure segue a linhagem da família Joestar, que possui habilidades sobrenaturais.",
    },
    {
        id: 3,
        logoImg: logoDbz,
        classLogo: styles.dbz_logo,
        age: "+10",
        genres: ["AÇÃO", "LUTAS", "SCI-FI"],
        sinopse:
        "Dragon Ball narra as aventuras de Goku e seus amigos, que defendem a Terra contra uma variedade de vilões intergalácticos.",
    },
];

function Banner() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;

    useEffect (() => {
        let timeout;

        function autoSlide() {
            setCurrentSlide(prev => (prev + 1) % totalSlides);
            timeout = setTimeout(autoSlide, 5000);
        }

        timeout = setTimeout(autoSlide, 5000);

        return () => clearTimeout(timeout);
    }, []);

    function handleRadioClick(index) {
        setCurrentSlide(index);
    }

    const currentBannerInfo = bannerData[currentSlide];

    return(
        <div className={styles.slider_container} 
        style={{marginLeft: `-${currentSlide * 100}vw`, transition: `margin-left 0.5s ease-in-out`}}>
            
            <div className={styles.box_img}>
                
                <img src={bannerNaruto} alt="Naruto-banner" />
                
            </div>

            <div className={styles.box_img}>

                <img src={bannerJujutsu} alt="jujutsu-banner"/>

            </div>

            <div className={styles.box_img}>

                <img src={bannerJojo} alt="jojo-banner"/>

            </div>

            <div className={styles.box_img}>

                <img src={bannerDbz} alt="db-banner"/>

            </div>

            <div className={`${styles.container_logos} ${currentBannerInfo.classLogo}`}>
                <img src={currentBannerInfo.logoImg} alt="logo-anime"/>
                <div className={styles.info_banner}>
                    <p>{currentBannerInfo.age}</p>
                    {currentBannerInfo.genres.map((genre, i) => (
                        <p key={i}>{genre}</p>
                    ))}
                </div>
                <div className={styles.sinopse}>
                    <p>{currentBannerInfo.sinopse}</p>
                </div>
                <div className={styles.container_buttons}>
                    <button className={styles.assistir_btn}>Assistir</button>
                    <button className={styles.episodeos_btn}>Episódeos</button>
                </div>

                <div className={styles.animes_buttons}>
                    <input type="radio" name="banner-radio" value={0} checked={currentSlide === 0} onChange={() => handleRadioClick(0)}/>

                    <input type="radio" name="banner-radio" value={1} checked={currentSlide === 1} onChange={() => handleRadioClick(1)}/>

                    <input type="radio" name="banner-radio" value={2} checked={currentSlide === 2} onChange={() => handleRadioClick(2)}/>

                    <input type="radio" name="banner-radio" value={3} checked={currentSlide === 3} onChange={() => handleRadioClick(3)}/>
                
                </div>
            </div>

            
        </div>
    )
}

export default Banner