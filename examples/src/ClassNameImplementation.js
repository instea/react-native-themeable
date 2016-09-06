import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View } from 'react-native-themeable'

const withClassNames = propsDefs => (type, props) => {
  const def = propsDefs.find(s => s.$type === type &&
                                  s.$className === props.className)
  if (def) {
    const { $className, $type, style, ...themeProps } = def // eslint-disable-line
    return {
      ...themeProps,
      ...props,
      style: [ style, props.style ],
    }
  }
  return props
}

const theme = withClassNames([
  {
    $type: Text,
    $className: 'primary',
    style: {
      color: 'blue',
    },
  },
  {
    $type: Text,
    $className: 'success',
    style: {
      color: 'green',
    },
  },
  {
    $type: Text,
    $className: 'error',
    style: {
      color: 'red',
      fontWeight: 'bold',
    },
  },
  {
    $type: Text,
    style: {
      color: 'black',
      fontStyle: 'italic',
    },
  },
])

export default class ClassNameImplementation extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          This is demonstration how can be apply function used to integrate simple
          style classes to native components.
        </Text>

        <Theme apply={theme}>
          <View>
            <Text className='primary'>This is primary text (className='primary')</Text>
            <Text className='success'>This is success (className='success')</Text>
            <Text className='error'>This is error class (className='error')</Text>
            <Text>This is default text styled without class name</Text>
          </View>
        </Theme>

      </View>
    )
  }
}
