import RN from 'react-native'
import { themeable } from './core'

const Text = themeable(RN.Text),
      View = themeable(RN.View)

export { Text, View }

export { Theme, themeable } from './core'

export { applyStyle } from './helpers'
