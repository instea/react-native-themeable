import React, { Component } from 'react'
import { styles } from './styles'

import { theme, Text, View, withStyles } from 'react-native-themeable'

const redTheme = withStyles([
  {
    $type: Text,
    color: 'white',
    fontSize: 26,
  }, {
    $type: View,
    backgroundColor: 'red',
  }
])

// If you use ES7 decorators, you can decorate original component with:
// @theme(redTheme)
class _Content extends Component {
  render() {
    return (
      <View>
        <Text>Using theme injected from decorator</Text>
      </View>
    )
  }
}

// decorate element
const Content = theme(redTheme)(_Content)

export default class Basic extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          In this example {`<Content />`} element is decorated with `theme` decorator.
        </Text>

        <Content />

      </View>
    )
  }
}
