import React from 'react';
import { Button } from '@mantine/core';


const CustomButton = (props) => {
    const { children, ...rest } = props;
    return (
        <Button {...rest} className='primary-btn'>
            {children}
        </Button>
    )
}

export default CustomButton