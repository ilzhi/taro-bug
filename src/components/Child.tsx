import React from 'react'
import { ScrollView, View } from "@tarojs/components";

export default function(props) {
  
  function onClick() {
    props.onFunc && props.onFunc()   
  }

  return (
    <ScrollView scrollIntoView='a1'>
      <View id='a1' onClick={onClick}>a1</View>
      <View id='a2' onClick={onClick}>a2</View>
    </ScrollView>
  )
}