import { createContext, useState, useContext } from "react";

const MinhaListaContext = createContext();

export const MinhaListaProvider = ({ children }) => {
    const [minhaLista, setMinhaLista] = useState([]);

    const adicionarAnime = (anime) => {
        setMinhaLista((prevLista) => {
            const jaExiste = prevLista.some((item) => item.id === anime.id);
            return jaExiste? prevLista : [...prevLista, anime];
        });
    };

    const removerAnime = (id) => {
        setMinhaLista((prevLista) => prevLista.filter ((item) => item.id !== id));
    };

    return (
        <MinhaListaContext.Provider value={{minhaLista, adicionarAnime, removerAnime}}>
            {children}
        </MinhaListaContext.Provider>
    );
};

export const useMinhaLista = () => useContext(MinhaListaContext);