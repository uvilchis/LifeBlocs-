import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class BloodDonorOrg extends React.Component {
  static navigationOptions = {
    title: 'BloodDonorOrg'
  }

  navigateToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Blood</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.navigateToScreen('EncodeBloodIdentity')}>
          <Text style={styles.buttonText}>Encode Identity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Recieve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encode Test Data</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: -100,
  },
  button: {
    backgroundColor: 'red',
    marginTop: 50,
    borderRadius: 9,
    width: 310,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  }
});
   