import React from "react";
import { ScrollView, View } from "react-native";
import All from './SampelComponen';
import Styling from "./Styling";
import FlexBox from "./FlexBox";

const App= () =>{//arrow function
  return (
    <View>
      <ScrollView>
        <All />
      <Styling />
      <FlexBox />
      </ScrollView>
    </View>
    
  )
};


export default App;