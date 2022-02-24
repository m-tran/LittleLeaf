import React, { useState } from 'react';
import { Text, View, Image, useWindowDimensions, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import styles from '../../../LittleLeaf/styles.js';
import icons from '../../../assets/icons/icons.js';
import homeImage from '../../../assets/images/Home_4x.png';
import CustomButton from '../../components/CustomButton';
import IconButtonRectangle from '../../components/IconButtonRectangle';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

	const navigation = useNavigation();

	const { height } = useWindowDimensions();
	const { width } = Dimensions.get('window').width;

	const onLoginPressed = () => {
		navigation.navigate('SignIn');
	}

	const onSignUpPressed = () => {
		navigation.navigate('SignUp');
	}

	const Google = <FontAwesomeIcon icon={faGoogle} size={40} color={"white"} />;

	const Apple = <FontAwesomeIcon icon={faApple} size={40} color={"white"} />;

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#f6f6f6"
			}}>
			<View
				style={{
					paddingVertical: 50,
					paddingHorizontal: 25,
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}>
				<Text style={styles.smallTitleText}>little leaf {icons.PLANT}</Text>
				<Text style={styles.largeTitleText}>Easily keep track & care for your plants.</Text>
			</View>
			<Image
				source={homeImage}
				style={{
					width: width,
					height: height * 0.35,
					justifyContent: "flex-end",
					marginRight: -125,
					marginTop: -50
				}}
				resizeMode="contain"
			/>
			<View
				style={{
					padding: 10,
				}}
			>
				<IconButtonRectangle
					text="Sign Up with Google"
					onPress={onLoginPressed}
					icon={Google}
					bgColor="#44A570"
					fgColor="#fff"
					shColor="#7BD194"
					border="#44A570"
				/>
				<IconButtonRectangle
					text="Sign Up with Apple"
					onPress={onLoginPressed}
					icon={Apple}
					bgColor="#44A570"
					fgColor="#fff"
					shColor="#7BD194"
					border="#44A570"
				/>
				<IconButtonRectangle
					text="Sign Up with Email"
					onPress={onLoginPressed}
					bgColor="#fff"
					fgColor="#44A570"
					shColor="#7BD194"
					border="#44A570"
				/>
				<Text
					style={{
						margin: 10,
						alignSelf: "center",
						color: "#44A570"
					}}
				>
					Already have an account? Log in.
				</Text>
			</View>
			{/* <CustomButton
				text="Login"
				onPress={onLoginPressed}
				type="Tertiary"
			/>
			<CustomButton
				text="Signup"
				onPress={onSignUpPressed}
				type="Tertiary"
			/> */}
		</View>
	)
}
export default Home;