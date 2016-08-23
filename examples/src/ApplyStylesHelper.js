import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View, applyStyle } from 'react-native-themeable'

const redTheme = applyStyle(type => {
  switch(type) {
    case Text:
      return {
        color: 'black',
        fontSize: 16,
      }
    case View:
      return {
        backgroundColor: 'red',
      }
  }
})

const blueTheme = applyStyle(type => {
  switch(type) {
    case Text:
      return {
        color: 'white',
        fontSize: 26, padding: 10,
      }
    case View:
      return {
        backgroundColor: 'blue',
      }
  }
})

export default class ApplyStyleHelper extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          `apply` function in this example is implemented using `applyStyle` helper.
          This function reduces boilerplate needed for merging styles:
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
