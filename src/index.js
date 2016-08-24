import RN from 'react-native'
import { themeable } from './core'

const Text = themeable(RN.Text),
      View = themeable(RN.View),
      TouchableHighlight = themeable(RN.TouchableHighlight)

export { Text, View, TouchableHighlight }

export { Theme, themeable, theme } from './core'

export { applyStyle, withStyles, withProps } from './helpers'
