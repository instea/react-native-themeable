import { themeable } from './core'
import ReactNative from 'react-native'

const names = [
  'ActivityIndicator',
  'ActivityIndicatorIOS',
  'DatePickerIOS',
  'DrawerLayoutAndroid',
  'Image',
  'ListView',
  'MapView',
  'Modal',
  'Navigator',
  'NavigatorIOS',
  'Picker',
  'PickerIOS',
  'ProgressBarAndroid',
  'ProgressViewIOS',
  'RefreshControl',
  'ScrollView',
  'SegmentedControlIOS',
  'Slider',
  'SliderIOS',
  'StatusBar',
  'SnapshotViewIOS',
  'Switch',
  'SwitchAndroid',
  'SwitchIOS',
  'TabBarIOS',
  //'TabBarIOS.Item', // TODO: needs special handling
  'Text',
  'TextInput',
  'ToolbarAndroid',
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableOpacity',
  'TouchableWithoutFeedback',
  'View',
  'ViewPagerAndroid',
  'WebView',
]

const components = names.reduce((r, name) => {
  const Component = ReactNative[name]
  if (Component) {
    r[name] = themeable(Component)
  }
  return r
}, {})

module.exports = components
