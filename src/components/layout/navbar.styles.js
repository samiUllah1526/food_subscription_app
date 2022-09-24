import { createStyles } from '@mantine/core';
import colors from '../../contants/colors';
// import primary_color
export const useStyles =  createStyles((theme) => ({
    height: {
        minHeight: '80px',
    },
    tab: {
        minWidth: '80px',
        minHeight: '40px',
        alignItems: 'stretch',
        borderRadius: '10px',
        
        color: 'white',
        background: colors.primary_color,

        transition: '0.5s ease-out',

        '&:hover': {
            color: colors.primary_color,
            background: 'white',
            borderRadius: '10px',
          },
    },

}));