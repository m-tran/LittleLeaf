import React from 'react';
import { Text, View } from 'react-native';
import styles from './LittleLeaf/styles.js';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
		marginTop: "25%",
		marginLeft: "10%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}>
      <Text style={styles.titleText}>Home</Text>
	  <Text style={styles.baseText}>Add Plant</Text>
    </View>
  )
}
export default App;