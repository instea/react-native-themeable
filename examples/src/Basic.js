import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View } from 'react-native-themeable'

const redTheme = (type, props) => {
  if (type === Text) {
    return Object.assign({}, props, {
      style: {
        color: 'black',
        fontSize: 16,
      }
    })
  }
  if (type === View) {
    return Object.assign({}, props, {
      style: {
        backgroundColor: 'red',
      }
    })
  }
  return props
}

const blueTheme = (type, props) => {
  if (type === Text) {
    return Object.assign({}, props, {
      style: {
        color: 'white',
        fontSize: 26,
        padding: 10,
      }
    })
  }
  if (type === View) {
    return Object.assign({}, props, {
      style: {
        backgroundColor: 'blue',
      }
    })
  }
  return props
}

export default class Basic extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          Following elements use different themes represented by basic implemention of `apply` function:
        </Text>

        <Theme apply={redTheme}>
          <View>
            <Text>This component uses red theme with small black fonts</Text>
          </View>
        </Theme>

        <Theme apply={blueTheme}>
          <View>
            <Text>This component uses blue theme and large white fonts</Text>
          </View>
        </Theme>

      </View>
    )
  }
}
