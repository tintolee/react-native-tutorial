import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ColorCounter({color, dispatch}) {
    return (
        <View>
            <Text>{color}</Text>
            <Button title= {`Increase ${color}`}   onPress={()=>dispatch()}/>
            <Button title=  {`Decrease ${color}`}   onPress={()=>dispatch()} />
        </View>
    )
}
