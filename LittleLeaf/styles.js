import { StyleSheet } from 'react-native';
import theme from '../LittleLeaf/styles/theme.style';

export default StyleSheet.create({
	baseText: {
		fontFamily: "Inter-SemiBold"
	},
	largeTitleText: {
		fontFamily: "LibreCaslonText-Bold",
		fontSize: theme.FONT_SIZE_LARGE,
		fontWeight: theme.FONT_WEIGHT_HEAVY,
		paddingVertical: theme.PADDING_SMALL
	},
	mediumTitleText: {
		fontFamily: "LibreCaslonText-Bold",
		fontSize: theme.FONT_SIZE_MEDIUM,
		fontWeight: theme.FONT_WEIGHT_HEAVY
	},
	smallTitleText: {
		fontFamily: "LibreCaslonText-Bold",
		fontSize: theme.FONT_SIZE_SMALL,
		fontWeight: theme.FONT_WEIGHT_HEAVY
	},
	largeButtonText: {
		fontSize: theme.FONT_SIZE_LARGE,
		fontWeight: theme.FONT_WEIGHT_HEAVY
	},
	background: {
		backgroundColor: theme.BACKGROUND,
	}
});