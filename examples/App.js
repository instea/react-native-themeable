import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import Basic from './src/Basic'
import ApplyStyleHelper from './src/ApplyStylesHelper'
import NestedTheme from './src/NestedTheme'
import ThemeableComponents from './src/ThemeableComponents'
import CustomStyleDefinition from './src/CustomStyleDefinition'
import SwitchTheme from './src/SwitchTheme'
import ApplyImplementation from './src/ApplyImplementation'
import ThemeWithProps from './src/ThemeWithProps'
import ThemeDecorator from './src/ThemeDecorator'
import MultipleComponents from './src/MultipleComponents'

const examples = [
  { name: 'Basic example', component: Basic },
  { name: 'Nested theme', component: NestedTheme },
  { name: 'Theme switcher', component: SwitchTheme },
  { name: 'Multiple components', component: MultipleComponents },
  { name: 'Themeable components', component: ThemeableComponents },
  { name: 'Custom style definition', component: CustomStyleDefinition },
  { name: 'Theme with props', component: ThemeWithProps },
  { name: 'Theme decorator', component: ThemeDecorator },
  { name: 'Low-level apply implementation', component: ApplyImplementation },
  { name: 'applyStyle helper', component: ApplyStyleHelper },
]

export default class App extends Component {

  constructor(...args) {
    super(...args)
    this.state = { selected: undefined }
  }

  onExamplePress(selected) {
    this.setState({ selected })
  }

  back() {
    this.setState({ selected: undefined })
  }

  render() {
    if (this.state.selected) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            { React.createElement(this.state.selected.component) }
          </View>
          <View>
            <TouchableOpacity onPress={this.back.bind(this)} style={styles.link}>
              <Text>{'<'} Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>React native themeable examples</Text>
        <ScrollView style={{ flex: 1 }}>
        {
          examples.map(e => (
            <TouchableOpacity key={e.name} onPress={this.onExamplePress.bind(this, e)} style={styles.link}>
              <Text>{ e.name }</Text>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  link: {
    padding: 10,
    backgroundColor: 'cornsilk',
    borderTopColor: '#bbb',
    borderTopWidth: 1,
  },
  header: {
    padding: 10,
    paddingTop: 40,
    fontSize: 20,
  },
})
