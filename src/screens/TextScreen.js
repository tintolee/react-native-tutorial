import React , {useState} from 'react'
import { View, StyleSheet, Text,TextInput } from 'react-native'






export default function TextScreen() {
  const [Input, setInput] = useState('')


    return (
        <View>
            <Text> Enter Password:</Text>
            <TextInput  value={Input}
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.input}  onChangeText={(e)=>setInput(e)}/>
            {Input.length < 5 ? <Text> password should be greater than 5 </Text>: null}
           


        </View>
    )
}



const styles= StyleSheet.create({
     input:{
         margin:15,
         borderColor:'blue',
         borderWidth:1
     }

})