import { createStyles } from '@mantine/core';
import colors from 'contants/colors';


export default createStyles((theme) => ({
    inputBorder: {
        border: `1px solid ${colors.border_color}`,
        borderRadius: '8px',
        transition: '0.25s ease-in',

        '&:hover': {
            border: `1px solid ${colors.primary_color}`,
        },
    },
    background: {
        background: colors.primary_color,
    },
}));
