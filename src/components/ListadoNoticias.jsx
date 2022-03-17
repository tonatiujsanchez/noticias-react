import { Grid, Typography } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import CardNoticia from "./CardNoticia";


const ListadoNoticias = () => {
    const { noticias } = useNoticias();

    console.log(noticias);
    return (
        <>
            <Typography component="h2" marginY={5} textAlign="center" variant="h4">
                Últimas Noticias
            </Typography>
            <Grid container spacing={3}>
                { noticias.map( noticia => <CardNoticia key={ noticia.url } noticia = { noticia } /> ) }
            </Grid>
        </>
    )
}

export default ListadoNoticias