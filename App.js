import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Riphah</Text>
      </View>

      {/* Circular Image */}
      <Image 
        source={require('./assets/download (1).jpeg')} 
        style={styles.image} 
      />

      {/* Email Input */}
      <TextInput 
        style={styles.input}
        placeholder="Enter Email Address"
        placeholderTextColor="grey"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {/* Email Input */}
      <TextInput 
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="grey"
        value={password}
        onChangeText={setpassword}
        keyboardType='visible-password'
      />

      {/* Custom Styled Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('welcome!')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      {/* Footer */}
      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 My App</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 20,
    borderWidth: 0,
    borderColor: 'grey'
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'cyan blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#6200ea',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  }
});

export default App;
