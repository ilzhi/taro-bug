import React, { Component } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import Child from '../../components/Child'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>首页</Text>
        <Navigator url='/pages/detail/detail' open-type='navigate'>跳转到详情页</Navigator>
        <Child onFunc={() => {console.log('index')}}></Child>
      </View>
    )
  }
}
