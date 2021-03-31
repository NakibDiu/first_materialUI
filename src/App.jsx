import react from 'react'
import {Typography, AppBar, Button, Card, CardActions, CardContent,CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import useStyle from './Styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const i = 0;
    const classes = useStyle();
    return(
        <>
            <CssBaseline />
            <AppBar position = "relative">
                <Toolbar>
                    <PhotoCameraIcon className = {classes.icon}/>
                    <Typography variant = "h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className = {classes.container}>
                    <Container maxWidth = "sm">
                        <Typography variant = "h2" align = "center" color = "texPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant = "h5" align = "center" color = "textSecondary" paragraph>
                            Hello, This is Nakib Tahmid ullah. I am building this Photo Album Project for learning Material UI and master the react. After learning this I will use it to Ishraq smartifier project.
                        </Typography>
                        <div className = {classes.buttons}>
                            <Grid container spacing = "2" justify = "center">
                                <Grid item >
                                    <Button variant = "contained" className = {classes.button} >
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant = "outlined" className = {classes.button2} >Secondary Actions</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className = {classes.cardGrid} maxWidth= "md">
                    <Grid container spacing = "4">
                        {cards.map(() =>(
                            <Grid item xs = "12" sm = "6" md = "4">
                            <Card className = {classes.card}>
                                <CardMedia 
                                    className = {classes.cardMedia}
                                    image = "https://source.unsplash.com/random"
                                    title = "image title"
                                />
                                <CardContent className = {classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is the content description part. Here we talk about the image we have shown above in the cardMedia part. This is sound interesting. Isn't it?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size = "small" color= "primary">
                                        View
                                    </Button>
                                    <Button size = "small" color= "primary">
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>

                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className = {classes.footer}>
                <Typography variant = "h6" align = "center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant = "subtitle1" align = "center" color = "textSecondary">
                    This is the place of Footer
                </Typography>
            </footer>
        </>
    );
}

export default App;