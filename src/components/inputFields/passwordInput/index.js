import React from 'react'
import { PasswordInput } from '@mantine/core';
import useStyles from './../inputFields.styles';



const PasswordField = (props) => {
    const { classes } = useStyles();
    return (
        <PasswordInput { ...props } classNames={{ input: classes.inputBorder }} />
    )
}

export default PasswordField;