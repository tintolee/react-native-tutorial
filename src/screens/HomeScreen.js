import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
     <View>
  <Text style={styles.text}>Hey there </Text>
      
       <TouchableOpacity onPress={()=> navigation.navigate('New')}>
         <Text>Go to </Text>
       </TouchableOpacity>
        
       <TouchableOpacity onPress={()=> navigation.navigate('Image')}>
         <Text>Go to Image screen</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=> navigation.navigate('Counter')}>
         <Text>Go to Counter</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=> navigation.navigate('Color')}>
         <Text>Go to Color</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=> navigation.navigate('Square')}>
         <Text>Go to Square screen</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=> navigation.navigate('Text')}>
         <Text>Go to Text screen</Text>
       </TouchableOpacity>
       

       <TouchableOpacity onPress={()=> navigation.navigate('Box')}>
         <Text>Go to Box screen</Text>
       </TouchableOpacity>


      </View>
  )
 
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
