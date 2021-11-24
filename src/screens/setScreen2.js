import React , {useState}from 'react'
import { View, Text } from 'react-native'
import ColorCounter from './ColorCounter'

const COLOR_INCREAMENT = 15



export default function squareScreen() {
    const [red, setred] = useState(0)
    const [green, setgreen]= useState(0)
    const [blue, setblue] = useState(0)
   


    setColor=(color, change)=>{
       // color === 'red', 'green', 'blue'
       //change=== '+15', '-15'
       switch (color) {
           case 'red':
            red + change > 255|| red + change < 0 ? null : setred(red+change)
          return
          case 'green':
            green + change > 255|| green + change < 0 ? null : setgreen(green+change)
          return
          case 'blue':
            blue + change > 255|| blue + change < 0 ? null : setblue(blue+change)
          return
          default:
            return
    }}

    
return (
        <View>
           <ColorCounter 
           onIncrease={()=> setColor('red', COLOR_INCREAMENT)}  
           onDecrease={()=> setColor('red', -1 * COLOR_INCREAMENT)}  
           color='Red'/>
           <ColorCounter 
             onIncrease= {()=> setColor('green', COLOR_INCREAMENT)}
             onDecrease= {()=> setColor('green', -1 * COLOR_INCREAMENT)}
           color='Green'/>

           <ColorCounter  
           onIncrease= {()=> setColor('blue', COLOR_INCREAMENT)} 
           onDecrease= {()=> setColor('blue', -1 * COLOR_INCREAMENT)}
           
           color='Blue'  />

          <View style={{ height:150, width:150, backgroundColor: `rgb(${red},${green},${blue})`}} />

        </View>
    )
}
