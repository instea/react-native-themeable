import React, { Component } from 'react'
import { styles } from './styles'

import { Theme, Text, View, withStyles, chain } from 'react-native-themeable'

const redTheme = withStyles([
  {
    $type: Text,
    color: 'white',
    fontSize: 16,
  }, {
    $type: View,
    backgroundColor: 'red',
    padding: 20,
  },
])

const blueTheme = withStyles([
  {
    $type: View,
    backgroundColor: 'blue',
    margin: 10,
  },
])

export default class ChainApplyFunctions extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          You can chain/combine multiple apply functions using `chain`.
          It is useful when you need to inherit styles from other themes.
        </Text>

        <Theme apply={redTheme}>
          <View>
            <Text>Using red theme with white text</Text>

            <Theme apply={chain(blueTheme, redTheme)} inherit={true}>
              <View>
                <Text>Using both blue and red theme (I've inherited text styles)</Text>
              </View>
            </Theme>

          </View>
        </Theme>

      </View>
    )
  }
}
