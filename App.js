import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo'; 
import LogoImage from './LogoImage'; 
import { Button } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <StatusBar style="auto" />
      <Logo></Logo>
      <LogoImage></LogoImage>
      <Button onTouchEnd={() =>{
        console.log("Pressed button")
      }}>Paper button</Button>
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

