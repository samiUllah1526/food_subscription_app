import React from 'react'
import { Checkbox } from '@mantine/core';
import useStyles from './../inputFields.styles';

const CustomCheckbox = (props) => {
    const { classes } = useStyles();    
    const { checked } = props;

  return (
    <Checkbox { ...props } label="Remember me"  classNames={{input: `${checked  && 'primary-checkbox'}`}}/> 
  )
}

export default CustomCheckbox;