import React from 'react'
import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';
import { useStyles } from './home.styles'


export const Home = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.background}>
        <div className={`container center-y ${classes.body}`}>
          <div className={`center ${classes.outerWrapper}`}>
            <h1 className={`primary-color center ${classes.innerWrapper}`}>
              FooDish
            </h1>
          </div>
          <div>
            <h1>
              Hey! nice to see you.
            </h1>
            <p className='center-text'>Wanna login?
              <span>
              <Anchor className={`link`} component={Link} to="/login">
                click here
              </Anchor>
              </span>
            </p>
          </div>
        </div>


      </div>
    </>
  )
}
