import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Child from '../../components/Child'

export default class Detail extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='detail'>
        <Text>详情页</Text>
        <Child onFunc={() => {console.log('detail')}}></Child>
      </View>
    )
  }
}
