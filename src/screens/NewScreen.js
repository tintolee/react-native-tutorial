import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function NewScreen() {
 const Friends =[
     {name:'Friend #1', age : '23'},
     {name:'Friend #2', age : '25'},
     {name:'Friend #3' , age : '26' },
     {name:'Friend #4' , age : '27'},
     {name:'Friend #5', age : '28' },
     {name:'Friend #6', age : '29'},
     {name:'Friend #7', age : '30' },
     {name:'Friend #8', age : '2486' },
     {name:'Friend #9' , age : '90'},
     {name:'Friend #10', age : '67' },
     {name:'Friend #11', age : '90' },
     
 ]






    return (
        <FlatList 
        
        keyExtractor={frnd=>frnd.name}
        data={Friends}
        renderItem={({item})=>{
            return<Text style={styles.text}>{item.name}- {item.age}</Text>
        }}
        
        />
        
        
        
        )
}

const styles = StyleSheet.create({
    text: {
      marginVertical: 30,
    },
  });