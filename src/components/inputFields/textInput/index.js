import React from 'react'
import { TextInput } from '@mantine/core';
import useStyles from './../inputFields.styles';

const CustomTextInput = (props) => {
  const { classes } = useStyles();
  return (
    <TextInput {...props} classNames={{ input: classes.inputBorder }}  />
  )
}

export default CustomTextInput;
