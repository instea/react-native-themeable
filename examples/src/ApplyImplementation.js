import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View } from 'react-native-themeable'

const redTheme = (type, props) => {
  switch(type) {
    case Text:
      return Object.assign({}, props, {
        style: {
          color: 'black',
          fontSize: 16,
        },
      })
    case View:
      return Object.assign({}, props, {
        style: {
          backgroundColor: 'red',
        },
      })
    default:
      return props
  }
}

const blueTheme = (type, props) => {
  switch(type) {
    case Text:
      return Object.assign({}, props, {
        style: {
          color: 'white',
          fontSize: 26,
          padding: 10,
        },
      })
    case View:
      return Object.assign({}, props, {
        style: {
          backgroundColor: 'blue',
        },
      })
    default:
      return props
  }
}

export default class ApplyImplementation extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          This example shows how can be low-level `apply` function implemented to define themes:
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
