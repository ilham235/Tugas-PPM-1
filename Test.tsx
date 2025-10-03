import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";



const App = ()=> {
    return (
        <View style={styling.container} >
            <View style={{
            width:300,
            height:300,
            backgroundColor:'#798183ff',
            borderWidth:2,
            borderColor:'black',
            marginTop:20,
            marginLeft:20
        }}>
            
            <Text style={styling.Text}>Hitung Luas</Text>
            <TextInput style={{borderWidth:1}} />
        </View>
        </View>
       
    )
}

const styling = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'

    },
    Text:{
        fontSize:20,
        fontWeight:'bold'
    }
})


export default App;