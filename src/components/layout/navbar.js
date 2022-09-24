import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';
import { useStyles } from './navbar.styles'


const AppNavbar = () => {
    const { classes } = useStyles();
    return (
        <>
            <div className={`primary-bg center ${classes.height}`}>
                <div className='container space-between'>
                    <div>
                        <Anchor className={`center ${classes.tab}`} component={Link} to="/">
                            Home
                        </Anchor>
                    </div>
                    <div>
                        <Anchor className={`center ${classes.tab}`} component={Link} to="/login">
                            Login
                        </Anchor>
                    </div>
                    <div>
                        <Anchor className={`center ${classes.tab}`} component={Link} to="/register">
                            Register
                        </Anchor>
                    </div>
                    <div>
                        <Anchor className={`center ${classes.tab}`} component={Link} to="/admin">
                            Admin
                        </Anchor>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppNavbar;
