import React from 'react';
import { View, Text, Pressable } from 'react-native';

const IconButtonRectangle = ({ onPress, icon, text, bgColor, fgColor, shColor, border }) => {
	return (
		<Pressable
			onPress={onPress}
		>
			<View
				style={{
					backgroundColor: bgColor,
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
					padding: 10,
					margin: 10,
					borderRadius: 10,
					shadowColor: shColor,
					shadowOffset: { width: -2, height: 4 },
					shadowOpacity: 0.85,
					shadowRadius: 10,
					borderWidth: 2,
					borderColor: border
				}}
			>
				{icon}
				<Text
					style={[
						fgColor ? { color: fgColor } : {}
					]}
				>
					{text}
				</Text>
			</View>
		</Pressable>
	)
}

export default IconButtonRectangle;