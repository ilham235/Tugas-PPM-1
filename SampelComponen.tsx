import { Image, Text, TextInput, View } from "react-native";
import React, { Component } from "react";

const All =()=>{
  return(
    <View>
    <View style={{width:80, height:80, backgroundColor:'#48dbfb'}}/>
    <Text>Ilham Adi Muslim</Text>
    <Hudoro />
    <Text>Ilham Adi Muslim</Text>
    <Text>Ilham Adi Muslim</Text>
    <Photo />
    <TextInput style={{borderWidth:1}} />
    <BoxGreen />
    <Profile />
    
  </View>
  )
}

const Hudoro =() =>{
  return <Text>Hudoro mangku negoro</Text>; 
};

const Photo =()=> {
  return <Image source={{uri:'https://cdn.pixabay.com/photo/2024/09/19/21/07/night-sky-9059825_1280.jpg'}} style={{flex:1, height:300, }} />;
};

class BoxGreen extends Component{
  render(){
    return <Text >Component dari class</Text>
  }
}

class Profile extends Component{
  render() {
    return (
      <View>
        <Image source={{uri: 'https://cdn.pixabay.com/photo/2025/08/19/09/00/grey-9783494_960_720.jpg'}}
        style={{width:100, height:100, borderRadius:50}} />
        <Text style={{color:'blue', fontSize:20}} >Ini Owl</Text>
      </View>
    ) 
  }
}

export default All;