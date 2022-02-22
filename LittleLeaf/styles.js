import { StyleSheet } from 'react-native';
import theme from '../LittleLeaf/styles/theme.style';

export default StyleSheet.create({
	baseText: {
		fontFamily: "Inter-SemiBold"
	},
	titleText: {
		fontFamily: "LibreCaslonText-Bold",
		fontSize: theme.FONT_SIZE_LARGE,
		fontWeight: theme.FONT_WEIGHT_HEAVY
	},
	largeButtonText: {
		fontSize: theme.FONT_SIZE_LARGE,
		fontWeight: theme.FONT_WEIGHT_HEAVY
	},
	largeHeaderText: {
		fontSize: theme.FONT_SIZE_LARGE
	},
	mediumHeaderText: {
		fontSize: theme.FONT_SIZE_MEDIUM,
		color: theme.PRIMARY_COLOR
	}
});