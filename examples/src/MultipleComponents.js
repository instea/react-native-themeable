import React, { Component } from 'react'

import {
  View,
  Text,
  ScrollView,
} from 'react-native'

import {
  withProps,
  theme,
} from 'react-native-themeable'

import {
  ActivityIndicator,
  Image,
  Modal,
  Picker,
  RefreshControl,
  ScrollView as TScrollView,
  Slider,
  Switch,
  Text as TText,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View as TView,
} from 'react-native-themeable'

const redTheme = withProps([
  {
    $type: TText,
    style: {
      color: 'red',
    },
  }, {
    $type: TView,
    style: {
      backgroundColor: 'red',
      opacity: 0.2,
      borderStyle: 'dashed',
      borderWidth: 1,
    },
  }, {
    $type: TextInput,
    style: {
      color: 'red',
      textDecorationColor: 'red',
    },
  }, {
    $type: ActivityIndicator,
    color: 'red',
  }, {
    $type: Modal,
    animationType: 'slide',
  }, {
    $type: Picker,
    style: {
      color: 'red',
    },
  }, {
    $type: RefreshControl,
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    progressBackgroundColor: 'lightpink',
  }, {
    $type: Switch,
    thumbTintColor: 'red',
    tintColor: 'lightpink',
    style: {
      backgroundColor: 'lightpink',
    },
  }, {
    $type: Slider,
    style: {
      backgroundColor: 'lightpink',
    },
  }, {
    $type: TouchableOpacity,
    activeOpacity: 0.1,
  }, {
    $type: TouchableHighlight,
    underlayColor: 'lightpink',
  }, {
    $type: TScrollView,
    contentContainerStyle: {
      padding: 15,
      backgroundColor: 'lightpink',
    },
  }, {
    $type: Image,
    style: {
      opacity: 1,
    },
  },
])

const blueTheme = withProps([
  {
    $type: TText,
    style: {
      color: 'blue',
      fontStyle: 'italic',
    },
  }, {
    $type: TView,
    style: {
      backgroundColor: 'blue',
      opacity: 0.2,
      borderStyle: 'solid',
      borderWidth: 1,
    },
  }, {
    $type: TextInput,
    style: {
      color: 'blue',
    },
    autoCapitalize: true,
  }, {
    $type: ActivityIndicator,
    color: 'blue',
  }, {
    $type: Modal,
    animationType: 'fade',
  }, {
    $type: Picker,
    style: {
      color: 'blue',
    },
  }, {
    $type: RefreshControl,
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    progressBackgroundColor: 'lightblue',
  }, {
    $type: Switch,
    thumbTintColor: 'blue',
    tintColor: 'lightblue',
    style: {
      backgroundColor: 'lightblue',
    },
  }, {
    $type: Slider,
    style: {
      backgroundColor: 'lightblue',
    },
  }, {
    $type: TouchableOpacity,
    activeOpacity: 0.5,
  }, {
    $type: TouchableHighlight,
    underlayColor: 'lightblue',
  }, {
    $type: TScrollView,
    contentContainerStyle: {
      padding: 15,
      backgroundColor: 'lightblue',
    },
  }, {
    $type: Image,
    style: {
      opacity: 0.6,
    },
  },
])

const Row = props => (
  <View style={{
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
  }}>
    <Text>{props.caption}:</Text>
    {props.children}
  </View>
)

class ModalWrapper extends Component {
  constructor(...args) {
    super(...args)
    this.state = { visible: false }
  }
  render() {
    return(
      <View>
        <Modal
          visible={this.state.visible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
          <TouchableHighlight onPress={() => this.setState({ visible: false })}>
            <TText>Close Modal</TText>
          </TouchableHighlight>
        </Modal>
        <TouchableHighlight onPress={() => this.setState({ visible: true })}>
          <TText>Open Modal</TText>
        </TouchableHighlight>
      </View>
    )
  }
}

class SwitchWrapper extends Component {
  constructor(...args) {
    super(...args)
    this.state = { on: false }
  }
  render() {
    return (
      <Switch
        onValueChange={on => this.setState({on})}
        value={this.state.on} />
    )
  }
}

class PickerWrapper extends Component {
  constructor(...args) {
    super(...args)
    this.state = { value: false }
  }
  render() {
    return (
      <Picker
        onValueChange={value => this.setState({ value })}
        selectedValue={this.state.value}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    )
  }
}

class SampleSet extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Row caption='Text'>
          <TText>Some text</TText>
        </Row>
        <Row caption='View'>
          <TView style={{width: 90, height: 90}}></TView>
        </Row>
        <Row caption='TextInput'>
          <TextInput defaultValue='some input text' />
        </Row>
        <Row caption='ActivityIndicator'>
          <ActivityIndicator
            animating={true}
            style={{height: 80}}
            size="large"
          />
        </Row>
        <Row caption='Modal'>
          <ModalWrapper />
        </Row>
        <Row caption='Picker'>
          <PickerWrapper />
        </Row>
        <Row caption='Refresh control'>
          <ScrollView style={{height: 80}} refreshControl={
            <RefreshControl refreshing={true} />
          } />
        </Row>
        <Row caption='Switch'>
          <SwitchWrapper />
        </Row>
        <Row caption='Slider'>
          <Slider
            minimumValue={0}
            maximumValue={100}
          />
        </Row>
        <Row caption='TouchableOpacity'>
          <TouchableOpacity onPress={() => 0}>
            <TText>Touch me...</TText>
          </TouchableOpacity>
        </Row>
        <Row caption='TouchableHighlight'>
          <TouchableHighlight onPress={() => 0}>
            <TText>Touch me...</TText>
          </TouchableHighlight>
        </Row>
        <Row caption='ScrollView'>
          <TScrollView horizontal={true}>
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'gray'}} />
          </TScrollView>
        </Row>
        <Row caption='Image'>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
          />
        </Row>
      </View>
    )
  }
}
const RedSampleSet = theme(redTheme)(SampleSet)
const BlueSampleSet = theme(blueTheme)(SampleSet)

export default class Basic extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Following components use red (left column) and blue (right column) theme.</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <RedSampleSet />
          <BlueSampleSet />
        </View>
      </ScrollView>
    )
  }
}
