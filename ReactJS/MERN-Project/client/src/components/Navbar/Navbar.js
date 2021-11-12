import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles';
import diary from '../../images/diary.png';

const Navbar = () => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
        
    }, [])


    return (
        
            <AppBar className={classes.appBar} 
            position="static" 
            color="inherit">
                <div className={classes.brandContainer}>
                    <Typography component={Link} to='/' className={classes.heading} 
                    variant="h2" 
                    align="center">
                        My Diary
                        </Typography>

                    <img className={classes.image} 
                    src={diary} 
                    alt="diary" 
                    height="60" />

                </div>

                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.avater} alt={user.result.name} src={user.result.imageUrl}>
                                {user.result.name.charAt(0)}
                            </Avatar>

                            <Typography className={classes.userName} 
                            variant='h6'>
                                {user.result.name}
                            </Typography>

                            <Button variant='contained' className={classes.logout} color='secondary'>Log out</Button>
                        </div>
                    ) : (
                        <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                    )}
                </Toolbar>

                
            </AppBar>
    
    )
}

export default Navbar
