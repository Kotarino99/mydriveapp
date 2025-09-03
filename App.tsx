import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      { /* This is my Heading */}
      <Text >Welcome to your React Native App</Text>
        <Text style = {{  fontSize:20, color: 'cyan', fontStyle: 'italic', fontWeight: 900, marginTop: 20, marginBottom: 20   }}   >Hlombe Hlombs</Text>
        <Text style = {{ fontSize:30, color: 'red', fontStyle:'italic', fontWeight: 900,  marginTop: 20, marginBottom: 20 }}   >Favorite Movies: The Cape Of Fear</Text>
        <Text style = {{ fontSize:30, color: 'gold', fontStyle: 'italic' , fontWeight: 900, marginTop: 20, marginBottom: 20 }} > Favorite Director : El Jawero </Text>
        <TextInput style = {{ height: 50}} />
        <TextInput style = {styles.textinputstyle}
        placeholder=' In what year was your fave movie released'
        placeholderTextColor={'yellow'}
        />

      <Text> Hello World I can code on all phones now </Text>
      <View>
        <Text>Welcome your React App!</Text>
        <Text>Enter Name:</Text>
        <TextInput placeholder='First Name'/>
        <Text>Enter Surname</Text>
        <TextInput placeholder=' Surame'/>
        
        <Button title = "Add User"/>
      </View>
      <Image source={require('./assets/react.png')} />
         
        
      <StatusBar style="auto" />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    color: "purple"
  },


  textinputstyle:{
    height:50,
    fontSize: 20,
   borderWidth: 3,
   marginTop: 20,
   marginBottom: 20,
   borderColor: "cyan",
   paddingHorizontal: 35,
   fontWeight: 900,
   color: "red"

   function View 'Details'(){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent; 'center'}}>
    <Text>Name : ### Surname: #### </Text>
      </View>
    );
   };

   export default function App(){
    return(
      <NavigationContainer>
     <Stack.Navigator>
    <Stack.Screen name="Home" component={MainScreen}/>
    <Stack.Screen name="ViewDetails" component={ViewDetails}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
   };
 <Button title ="Add Useer"
 onPress={()=>{
Navigation.navigate('ViewDetails');
console.log("Name: " + Name + "Surname: " + Surname)
 }} />

 functions MainScreen({navigation})
 {
  const[Name, setName] = useState('');
  const[Surname, setSurname] = useState('')

  <Button title ="Add Useer"
  onPress={()=>{
 Navigation.navigate('ViewDetails',
{"NameSend: Name + "SurnameSend: Surname});
  }}
   function ViewDetails({navigation, route}) {
    const NameGet = route.parama.NameSend;
    const SurnameGet = route.params.SurnameSend;
   }
   return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Name : {NameGet}        
    </View>
   )1 sept 2025
  }red:{
    color: 'red'
    
  } fontWeight: 'bold'


});


