import React from 'react';
import {
	SafeAreaView,
} from 'react-native';

import Navigation from './src/navigation';

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