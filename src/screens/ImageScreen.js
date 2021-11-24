import React from 'react'
import { View,StyleSheet} from 'react-native'
import ImageDetails from '../Components/ImageDetails'



export default function ImageScreen() {
    return (
        <View>
           <ImageDetails  title='forest' imageSource={require('../../assets/forest.jpg')}  score='9'/>
           <ImageDetails  title='beach' imageSource={require('../../assets/beach.jpg')} score ='10'/>
           <ImageDetails  title='mountain' imageSource={require('../../assets/mountain.jpg')} score='7'/>
        </View>
    )
}


const styles =StyleSheet.create({

})