import { createStyles } from '@mantine/core';
import colors from 'contants/colors';


export const useStyles = createStyles((theme) => ({
    outerWrapper: {
        padding: '28px',
        background: '#EEEEEE',
        border: '1px solid #EEEEEE',
        borderRadius: '50%',
        background: '#FCFCFC',
    },

    innerWrapper: {
        padding: '10px',
        border: '1px solid #EEEEEE',
        borderRadius: '50%',
        background: 'white',
    },

    // tab: {
    //     minWidth: '80px',
    //     minHeight: '40px',
    //     alignItems: 'stretch',
    //     borderRadius: '10px',

    //     color: 'white',
    //     background: colors.primary_color,

    //     transition: '0.5s ease-out',

    //     '&:hover': {
    //         color: colors.primary_color,
    //         background: 'white',
    //         borderRadius: '10px',
    //       },
    // },

}));