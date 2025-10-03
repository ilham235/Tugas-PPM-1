import React, { Component } from "react";
import { View } from "react-native";


class FlexBox extends Component{
    render() {
        return (
            // membuat gambar menjadi berjajar ke samping(row) ke bawah(column)
        <View style={{
            flexDirection:'row', 
            backgroundColor:'grey', 
            alignItems:'flex-start',
            justifyContent:'space-between'}}> 
            {/* <Text>Materi FlexBox</Text> */}
            < View style={{backgroundColor:"#ee5253", width: 50, height:50}} />
            < View style={{backgroundColor:"#feca57", width: 50, height:50}} />
            < View style={{backgroundColor:"#1dd1a1", width: 50, height:50}} />
            < View style={{backgroundColor:"#5f27cd", width: 50, height:50}} />
        </View>)

    }
}

export default FlexBox;