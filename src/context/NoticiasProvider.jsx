import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

    const [ categoria, setCategoria ] = useState('general');
    const [ noticias, setNoticias ] = useState([]);

    useEffect(()=>{
        const getNoticias = async() => {
            const apiKey = import.meta.env.VITE_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${ categoria }&apiKey=${ apiKey }`;
            const { data } = await axios.get(url);

            setNoticias( data.articles );
        }
        getNoticias();
    },[categoria]);


    const handleChangeCategoria = ( e ) => {
        setCategoria( e.target.value );
    }

  return (
    <NoticiasContext.Provider
        value={{
            categoria,
            handleChangeCategoria,
            noticias
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