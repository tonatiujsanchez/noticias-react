import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material";


const CardNoticia = ({ noticia }) => {

    const { title, description, urlToImage, source, url } = noticia;

    return (

        <Grid item sm={6} md={4}>
            <Card>
                { urlToImage && <CardMedia component="img" alt={title} image={urlToImage} height={'250'}/> }
                <CardContent>
                    <Typography variant="body1" color="error">{ source.name }</Typography>
                    <Typography variant="h5" component="div">{ title }</Typography>
                    <Typography variant="body2" marginY={1} >{ description }</Typography>
                    <CardActions>
                        <Link
                            width={'100%'}
                            textAlign="center"
                            href={ url }
                            target="_blank"
                            variant="button"
                            sx={{
                                textDecoration: 'none'
                            }}
                        >Leer más</Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardNoticia