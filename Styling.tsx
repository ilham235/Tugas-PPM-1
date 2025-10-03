import React from "react"
import {View, Text, Image, StyleSheet} from "react-native"

const Styling =()=>{
  return(
    <View>
      <Text style={styles.Text} >Styling Component</Text>
      <View 
          style={{
            width:100, 
            height:100, 
            backgroundColor:'#48dbfb', 
            borderWidth:2,
            borderColor:'green',
            marginTop:20,
            marginLeft:20
            }} />
          <View style={{padding:12, backgroundColor:'#F2F2F2', width:212,borderRadius:8 }}>
            <Image source={require('./Gambar.jpg')} style={{width:188, height:187, borderRadius:8}} />
            <Text style={{fontSize:14, fontWeight:'bold', marginTop:16}} >Accer aspire 5</Text>
            <Text style={{fontSize:12, fontWeight:'bold', marginTop:16}} >Rp. 7.000.000</Text>
            <Text style={{fontSize:12, fontWeight:'300', marginTop:12}} >Jakarta Barat</Text>
              <View style={{backgroundColor:'#6FCF97', paddingVertical:6, borderRadius:25, marginTop:20}} >
                <Text style={{fontSize:14, fontWeight:'600', color:'white', textAlign:'center'}} >BELI</Text>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Text:{
    fontSize:18,
    fontWeight:'bold',
    color:'blue',
    marginLeft:20,
    marginTop:20
  }
})

export default Styling