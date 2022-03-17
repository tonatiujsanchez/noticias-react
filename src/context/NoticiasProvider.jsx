import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

    const [ categoria, setCategoria ] = useState('general');
    const [ noticias, setNoticias ] = useState([]);
    const [ pagina, setPagina ] = useState(1);
    const [ totalNoticias, setTotalNoticias ] = useState(0);


// Cosultar cada que la Categoría cambie
    useEffect(()=>{
        setPagina(1);
        const getNoticias = async() => {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ categoria }&apiKey=${ apiKey }`;
            const { data } = await axios.get(url);

            setNoticias( data.articles );
            setTotalNoticias(data.totalResults);
            
        }
        getNoticias();
    },[categoria]);



// Cosultar cada que la Página cambie
    useEffect(()=>{        
        const getNoticias = async() => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ categoria }&page=${ pagina }&apiKey=${ apiKey }`;
        const { data } = await axios.get(url);

        setNoticias( data.articles );
        setTotalNoticias(data.totalResults)
    }
    getNoticias();
    }, [pagina])




    const handleChangeCategoria = ( e ) => {
        setCategoria( e.target.value );
    }

    const handleChangePagina = ( e, value ) => {
        setPagina( value );
    }

  return (
    <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePagina,
            pagina
        }}
    >
        { children }
    </NoticiasContext.Provider>
  )
}

export{
    NoticiasProvider
}

export default NoticiasContext