import React, { Component } from 'react'
import { styles } from './styles'
import { Text } from 'react-native'

import { Theme, View, withStyles, themeable } from 'react-native-themeable'

// decorating your own components
// you can also use ES7 syntax to decorate component with `themeable`
class _CurrentTime extends Component {
  render() {
    const time = new Date().toString()
    return (
      <Text style={this.props.style}>{time}</Text>
    )
  }
}
const CurrentTime = themeable(_CurrentTime)

// you can also decorate functional components
const H1 = themeable(props => (
  <Text style={props.style}>{props.children}</Text>
))

// or decorate any other component (including native ones)
const H2 = themeable(Text)

const redTheme = withStyles([
  {
    $type: View,
    backgroundColor: 'red',
    padding: 20,
  }, {
    $type: H1,
    fontSize: 26,
    color: 'blue',
  }, {
    $type: H2,
    fontSize: 20,
    color: 'green',
  }, {
    $type: CurrentTime,
    fontSize: 16,
    color: 'white',
  },
])

export default class ThemeableComponents extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          You can plug your components into theme system by using `themeable` decorator.
          Furthermore you can decorate any component (including functional and native components):
        </Text>

        <Theme apply={redTheme}>
          <View>
            <H1>I am heading {'<H1 />'}!</H1>
            <H2>I am heading {'<H2 />'}!</H2>
            <CurrentTime />
          </View>
        </Theme>

      </View>
    )
  }
}
