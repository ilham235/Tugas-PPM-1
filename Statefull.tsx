import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, setMessage} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>State</Text>
      <MyComponent />
    </View>
  );
}

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const minus = ()=>{
    if(count > 0){
      setCount(count - 1);
    }
  }

useEffect(()=>{
   if (count ==0){
    setMessage('Reset to zero')
   }
   else{
    setMessage('Increament Values ${count} ')
   }
}, [count])
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={{width: '90%'}}>
        <Button 
          title="Increment" 
          onPress={() => setCount(count + 1)} 
          color="#4CAF50" 
        />
        <Button 
          title="Decrement" 
          onPress={() => setCount(count - 1)} 
          color="#c30505ff" 
        />
        <Button
          title="Reset"
          onPress={() => setCount(0)}
          />
      </View>    
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  box: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  }
});

export default App;