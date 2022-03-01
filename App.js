import React from 'react';
import {
	SafeAreaView,
} from 'react-native';
import Navigation from './src/navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: "#f6f6f6"
		}}>
			<Navigation />
		</SafeAreaView>
	);
};

export default App;