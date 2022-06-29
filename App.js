import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 import TabBar from './src/components/tab-bar'
import Add from './src/components/routes/add/app'
export default function App() {
  return (
    <View style={styles.container}>
  
<Add/>
      <TabBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
