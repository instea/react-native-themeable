import React, { Component } from 'react'
import { styles } from './styles'
import { Text } from 'react-native'

import { Theme, View, applyStyle, themeable } from 'react-native-themeable'

// decorating your own components
// you can also use ES7 syntax to decorate component with `themeable`
class _H1 extends Component {
  render() {
    return (
      <Text style={this.props.style}>{this.props.children}</Text>
    )
  }
}
const H1 = themeable(_H1)

// or decorating any other component (including native ones)
const P = themeable(Text)

const redTheme = applyStyle(type => {
  switch(type) {
    case View:
      return {
        backgroundColor: 'red',
        padding: 20,
      }
    case H1:
      return {
        fontSize: 26,
        color: 'blue',
      }
    case P:
      return {
        fontSize: 16,
      }
  }
})

export default class ThemeableComponents extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          You can plug your components into theme system by using `themeable` decorator.
          Furthermore you can decorate any component (including native components):
        </Text>

        <Theme apply={redTheme}>
          <View>
            <H1>I am heading {'<H1 />'}!</H1>
            <P>
              I am a paragraph {'<P />'} created using native component decoration.
            </P>
          </View>
        </Theme>

      </View>
    )
  }
}
