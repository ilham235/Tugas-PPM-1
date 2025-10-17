import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const [count, setCount] = useState{0}

const app=()=>{
    return(
        <View style={styles.container} >
            <Text>Open us App.js ti start working on your app!</Text>
            <StatusBar barStyle={'default'} />
            <Text style={styles.text} > Counter :</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,

    },
    text :{
        fontSize:10,
    }
})
