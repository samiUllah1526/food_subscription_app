import COLORS from "contants/colors"

export default {
    '.primary-color': {
        color: COLORS.primary_color,
    },
    '.primary-bg': {
        backgroundColor: COLORS.primary_color,
    },
    '.primary-btn': {
        backgroundColor: COLORS.primary_color,
        color: COLORS.sidebar_text_color,
        borderRadius: '50px',
        minHeight: '45px',
        fontWeight: 400,
        fontSize: 14,
    },
    '.primary-btn: hover': {
        backgroundColor: 'white',
        color: COLORS.primary_color,
        border: `1px solid ${COLORS.primary_color}`,
        fontWeight: 600,
        fontSize: 16,
    },
    '.primary-checkbox': {
        backgroundColor: `${COLORS.primary_color} !important`,
        border: `${COLORS.primary_color}`,
    },
    '.border-primary': {
        border: `1px solid ${COLORS.primary_light_color}`,
    },
}
