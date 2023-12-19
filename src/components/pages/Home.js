import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import speak from '../speak.json'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Home = () => {

    const homeStyle = {
        width: "100vw",
        Height: "auto",
    }
    const rightSide = {
        width: "50vw",
        display: "inline-block",
        position: "absolute",
        left: "50%"
    }

    const Yehkla = {
        color: "#f9690e",
        fontWeight: "bold",
    }
    return (
        <>
            <Helmet>
                <title>Yekkhla | Accueil</title>
            </Helmet>
            <div style={homeStyle} className='homePage'>
                <section className='firstPart'>
                    <div className='rightSide'>
                        <Player
                            autoplay
                            loop
                            src={speak}
                            style={{ height: '40rem', width: '45rem' }}
                        >
                            {/* <Controls visible={true} buttons={['play', 'repeat',]} /> */}
                        </Player>
                        {/* <img className='imageHome' src="https://img.freepik.com/photos-gratuite/conferencier-africain-coach-affaires-confiant-donnant-presentation-equipe_1163-4620.jpg?size=626&ext=jpg&ga=GA1.2.1998763568.1698434096&semt=ais" alt='Image de welcome' /> */}

                    </div>
                    <div className='leftSide'>
                        <div className='homeTitle'>Bienvenue <br /> sur Yehkla Word</div>
                        <h2 className='phraseHome'>
                            Démarrez votre aventure dans la pratique <br /> courante de l'anglais avec <span className='yekla-name' style={Yehkla}>Yehkla.</span>
                        </h2>
                        <h3 className='phraseHome'>
                            Exprimez vous et maîtriser l'<span style={{ color: "#f9b42d", fontWeight: "bold", textTransform: "uppercase" }}>Anglais</span>
                        </h3>
                        <Button
                            variant="contained"
                            style={{ width: 250, height: 50, alignContent: "center", fontSize: 25, position: "absolute", bottom: 80, fontFamily: "Montserrat" }}
                        >Commencer
                        </Button>
                    </div>
                </section>
                <section className='secondPart'>
                    <div>
                        <h1 className='cardTitle'>Nous apprendrons</h1>
                    </div>
                    <div className='cardContainer'>
                        <Card sx={{ maxWidth: 370 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://img.freepik.com/photos-gratuite/conferencier-africain-coach-affaires-confiant-donnant-presentation-equipe_1163-4620.jpg?size=626&ext=jpg&ga=GA1.2.1998763568.1698434096&semt=ais"
                                title="Apprentissage"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Présentiels
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rencontre entre les apprenants pour les cours en présentiels.
                                    Avec les experts et les débutants pour confronter vos compétence.s
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Voir plus</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 370 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://img.freepik.com/photos-gratuite/conferencier-africain-coach-affaires-confiant-donnant-presentation-equipe_1163-4620.jpg?size=626&ext=jpg&ga=GA1.2.1998763568.1698434096&semt=ais"
                                title="Apprentissage"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Présentiels
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rencontre entre les apprenants pour les cours en présentiels.
                                    Avec les experts et les débutants pour confronter vos compétence.s
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Voir plus</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 370 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://img.freepik.com/photos-gratuite/conferencier-africain-coach-affaires-confiant-donnant-presentation-equipe_1163-4620.jpg?size=626&ext=jpg&ga=GA1.2.1998763568.1698434096&semt=ais"
                                title="Apprentissage"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Présentiels
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rencontre entre les apprenants pour les cours en présentiels.
                                    Avec les experts et les débutants pour confronter vos compétence.s
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Voir plus</Button>
                            </CardActions>
                        </Card>
                        </div>
                </section>
            </div>
        </>
    )
}

export default Home