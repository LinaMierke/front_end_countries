import React, { useState } from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BasicTextFields from "./Form"
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';

// import SearchIcon from '@material-ui/icons/Search';





const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },

}));


export default function Album(props) {

    const [create, setCreate] = useState(false)
    const [searchText, setText] = useState("")
    const [newCapital, setNewCapital] = useState("")

    const classes = useStyles();



    function handleDelete(population) {
        console.log(population)

        fetch("https://linacountries.herokuapp.com/" + population, {

            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }

        })
            .then(res => res.text())
            .then(res => {
                console.log(res)


            })





    }
    function handleEdit(capitalText) {
        console.log(newCapital)
        fetch("https://linacountries.herokuapp.com/" + capitalText, {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                capital: newCapital
            })

        })
            .then(res => res.text())
            .then(res => console.log(res))


    }

    function handleChange(e) {
        setNewCapital(e.target.value)

    }



    return (

        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    {
                        create == false
                            ?

                            <Container maxWidth="sm">
                                <Typography component="h1" variant="h2" align="center" gutterBottom style={{ color: "#0B2E63" }}>
                                    Countries
            </Typography>
                                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                    Welcome to the countries website where you will find useful information about countries around the world.
                                    You can search for specific information, edit an existing country or create your own.
            </Typography>
                                {/* <InputBase
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                    }}
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                /> */}
                                <div className={classes.heroButtons}>
                                    <Grid container spacing={2} justify="center">
                                        <Grid item>
                                            {/* <Button variant="contained" color="primary">
                    Edit country
                  </Button> */}
                                        </Grid>
                                        <div className={classes.search}>

                                            <InputBase
                                                onChange={(e) => {
                                                    console.log(e.target)
                                                    setText(e.target.value)
                                                }}
                                                placeholder="Search…"
                                                classes={{
                                                    root: classes.inputRoot,
                                                    input: classes.inputInput,
                                                }}
                                                inputProps={{ 'aria-label': 'search' }}


                                            />

                                        </div>

                                        <Grid item>
                                            <Button onClick={() => setCreate(true)} style={{ color: "#186BB9", border: "1px solid #186BB9" }} >
                                                Create your country
                  </Button>

                                        </Grid>
                                    </Grid>
                                </div>
                            </Container>

                            : <div>
                                <BasicTextFields handleExit={() => setCreate(false)} />
                                {/* <Button onClick={() => setCreate(false)} style={{ border: "1px solid #186BB9" }} > Exit </Button>
                                <Button onClick={() => setCreate(false)} style={{ border: "1px solid #186BB9" }} > Submit </Button> */}


                            </div>
                    }
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {props.data.filter(fCard => fCard.name.includes(searchText)).map((card) => (
                            <Grid item key={card._id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2" style={{ color: "#134596" }}>
                                            {card.name}
                                        </Typography>
                                        <Typography>
                                            Capital: {card.capital} <br />
                                        Region: {card.region} <br />
                                        Population: {card.population}


                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <TextField placeholder={card.capital} onChange={handleChange} />

                                        <Button onClick={() => handleEdit(card.capital)}
                                            size="small"
                                            style={{ color: "#186BB9" }}
                                        >
                                            Edit
                    </Button>
                                        <Button onClick={() => {

                                            handleDelete(card.population)
                                        }}
                                            size="small" style={{ color: "#186BB9" }}>

                                            Delete

                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </React.Fragment>
    );
}
//onClick={()=>{
    // handleEdit(card.capital)
// }} 