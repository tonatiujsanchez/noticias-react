import { Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import useNoticias from "../hooks/useNoticias"
import CardNoticia from "./CardNoticia";


const ListadoNoticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

    const totalPaginas = Math.ceil( totalNoticias / 20 );
    return (
        <>
            <Typography component="h2" marginY={5} textAlign="center" variant="h4">
                Últimas Noticias
            </Typography>
            <Grid container spacing={3}>
                { noticias.map( noticia => <CardNoticia key={ noticia.url } noticia = { noticia } /> ) }
            </Grid>
            <Stack spacing={2} marginY={10} direction="row" justifyContent="center">
                <Pagination count={totalPaginas} color="primary" onChange={ handleChangePagina } page={ pagina }/>
            </Stack>
        </>
    )
}

export default ListadoNoticias