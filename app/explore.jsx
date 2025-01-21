import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import nails1 from '@/assets/images/nails1.png';
const explore = () => {
  return (
    <View style={styles.container}>
      <Image source={nails1} style={styles.image}></Image>
      <Text style={styles.text}>this is the nail it test project</Text>
      <Text>More text</Text>
      <Text>More text</Text>
      <Text>More text</Text>
      <Text>More text</Text>
      <Text>More text</Text>
      <Text>More text</Text>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '124px',
  },
});
