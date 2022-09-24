import React from 'react'
import { Container } from '@mantine/core';
import AppNavbar from './navbar'


const Layout = ({ children }) => {
    return (
        <>
            {/* <Container px="lg"> */}
                <AppNavbar />
            {/* </Container> */}


            {children}
        </>
    )
}

export default Layout