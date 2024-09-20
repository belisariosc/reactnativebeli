import React from "react";
import {View, Text, StyleSheet} from 'react-native';


export default function app (){
  return(
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet. create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
