import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('./assets/Group 61.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.subtitle}>
          
          We deliver the best and freshest fruit salad in town. Order for a combo today!!!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
   
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
