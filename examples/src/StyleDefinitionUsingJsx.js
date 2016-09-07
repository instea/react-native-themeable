import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View, TouchableHighlight } from 'react-native-themeable'

const withJsxDefinition = propsDefs => (type, props) => {
  const classNames = (props.className || '')
    .split(' ')
    .reduce((a, b) => Object.assign(a, { [b]: true }), { undefined: true })
  const defs = propsDefs.filter(s => {
    return s.type === type && classNames[s.props.className]
  })
  if (defs) {
    defs.push({ props })
    return defs.reduce((r, d) => {
      const { className, style: dStyle, ...dProps } = d.props // eslint-disable-line
      return {
        ...dProps, ...r, style: [ dStyle, r.style ],
      }
    }, {})
  }
  return props
}


const theme = withJsxDefinition([
  <Text
    className='primary'
    style={{
      color: 'blue',
    }}
  />,
  <Text
    className='success'
    style={{
      color: 'green',
    }}
  />,
  <Text
    className='error'
    style={{
      color: 'red',
    }}
  />,
  <Text
    className='bold'
    style={{
      fontWeight: 'bold',
    }}
  />,
  <Text
    style={{
      color: 'black',
      fontStyle: 'italic',
    }}
  />,
  <TouchableHighlight
    className='error'
    underlayColor='red'
  />,
  <TouchableHighlight
    underlayColor='gray'
    style={{
      padding: 10,
    }}
  />,
])

export default class StyleDefinitionUsingJsx extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          This is demonstration how can be apply function used to integrate simple
          style classes to native components. Furthermore style definition uses
          convenient JSX syntax.
        </Text>

        <Theme apply={theme}>

          <Text className='primary'>This is primary text (className='primary')</Text>
          <Text className='success'>This is success (className='success')</Text>
          <Text className='error'>This is error class (className='error')</Text>
          <Text>This is default text styled without class name</Text>
          <Text className='success bold'>This has two classes (className='success bold')</Text>

          <TouchableHighlight className='error' onPress={() => 0}>
            <Text>TouchableHighlight (className='error')</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => 0}>
            <Text>TouchableHighlight without class name</Text>
          </TouchableHighlight>

        </Theme>

      </View>
    )
  }
}
