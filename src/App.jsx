import { Container, Grid, Typography } from '@mui/material';
import { NoticiasProvider } from './context/NoticiasProvider';

import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {


    return (
        <NoticiasProvider>
            <Container>

                <header>
                    <Typography component="h1" variant="h4" align="center" marginY={3} fontWeight="bold">
                        React News
                    </Typography>
                </header>

                <Grid
                container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Formulario />
                    </Grid>
                </Grid>
                <ListadoNoticias />
            </Container>
        </NoticiasProvider>
    )
}

export default App
