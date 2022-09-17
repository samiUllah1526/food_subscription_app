import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';
import { useStyles } from './navbar.styles'


export const AppNavbar = () => {
    const { classes } = useStyles();
    return (
        <nav className={classes.wrapper}>
            <div>
                <Anchor component={Link} to="/">
                    Home
                </Anchor>
            </div>
            <div>
                <Anchor component={Link} to="/login">
                    Login
                </Anchor>
            </div>
            <div>
                <Anchor component={Link} to="/register">
                    Register
                </Anchor>
            </div>
            <div>
                <Anchor component={Link} to="/admin">
                    Admin
                </Anchor>
            </div>
        </nav>

    );
}
