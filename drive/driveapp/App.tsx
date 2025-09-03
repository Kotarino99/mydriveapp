import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const age = 22;
const licenceyears = 0;

let feedback = '';
if (age >= 18) {
  if(licenceyears >=3) {
    feedback ='Your are a qulified safe driver.';
  }
  else
feedback = 'You are allowed to drive. AYY'
}
else {
  feedback = 'not yet nyana'
}





  return (
    <View style={styles.container}>
      <Text style ={styles.response}>{feedback} {/* This is my message to be displayed to thge user*/}                                                                                    
      </Text>

     

    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
response:{
  fontSize: 24,
  fontWeight: 'bold',
  backgroundColor: 'cyan',
  color: 'red'

}



});
