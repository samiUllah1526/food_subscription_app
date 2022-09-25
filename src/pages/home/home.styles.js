import { createStyles } from '@mantine/core';
import colors from 'contants/colors';


export const useStyles = createStyles((theme) => ({
    background: {
        background: colors.background_color,
    },
    body: {
        minHeight: 'calc(100vh - 80px)',
    },
    outerWrapper: {
        background: '#EEEEEE',
        border: '1px solid #EEEEEE',
        borderRadius: '50%',
        background: '#FCFCFC',

        width: '300px',
        height: '300px',
    },
    innerWrapper: {
        border: '1px solid #EEEEEE',
        borderRadius: '50%',
        width: '250px',
        height: '250px',

        color: 'black',
        background: 'white',

        fontWeight: '700',
        fontSize: '45px',
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