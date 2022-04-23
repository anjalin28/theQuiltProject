
import React from 'react';
import q from './assets/q-logo.jpeg'
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

const LogoImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={q}
      />

    </View>
  );
}

export default LogoImage;