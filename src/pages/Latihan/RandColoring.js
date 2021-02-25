import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function RandColoring() {
  const [cuolor, setColor] = useState('tomato');
  const [index, setIndex] = useState(0);

  let Colories = ["red", "tomato", "blue"];
  

  const incerementColor = () => {
    // setColor(Colories[Math.round(Math.random(0, Colories.length))]);
    if (index == Colories.length - 1){
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setColor(Colories[index]);
    
    console.log(cuolor);
    console.log(index);
  };

  return (
    <View>
      <Text style={{color: cuolor}}>I am Color</Text>
      <TouchableOpacity onPress={incerementColor}>
        <Text>Click ME!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
