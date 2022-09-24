import COLORS from "../contants/colors"

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
    },
    '.primary-btn: hover': {
        backgroundColor: 'white',
        color: COLORS.primary_color,
        border: `1px solid ${COLORS.primary_color}`,
    },
}
