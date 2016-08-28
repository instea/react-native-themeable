# react-native-themeable
Themeable components for React Native.

## Installation
```
npm install react-native-themeable --save
```

*We follow semantic versioning but we haven't reach `1.x` milestone yet.*

Currently we are prototyping the possibilities to create themeable components that can be used as full featured replacement of traditional RN components.
However we appreciate any feedback (e.g. via issues) either about what would you like to achieve or alternative ideas how to approach themeability.

Following section describes what we want to achieve. You can check our working [examples](examples/src/).

## Questions and answers

**Q**: I don't need more themes, why should I care?

**A**: Well, you want to create applications that have unique feeling. Yes, you can change colors of almost any component in Android playing with its XML files, but if you don't come from native mobile development world you are not comfortable with it. And we want to have one JS solution for both platforms (that's why we use RN, isn't it? )

**Q**: I can create simple components like `MyText` that adds my specific styling.

**A**: Of course, that's definitely recommended to build your components and reuse as much styling (and other things) as possible. However there are various problems with that.

1. Simple wrappers over other components don't have all abilities unless you mimic all the functionality. E.g. you can't use simple `MyText` component within `TouchableHighlight` unless you implement `setNativeProps`. You can't focus `MyTextInput` with code unless you forward the request to underlying `TextInput`

2. Sometimes you want to use your component in different situations. E.g. you implement simple `MyCurrentTime` component but you want to use it both in your black header (i.e. you want have white text) but also in other parts of your application (that uses light background color). Thus simple `<Text style={{ color: 'white' }}>` won't work.


**Q**: I got it. So what do you propose?

**A**: I know that React [context](https://facebook.github.io/react/docs/context.html) should not be used much but theming is explicit example of allowed use.

> Theming is a good example of when you might want an entire subtree to have access to some piece of information

And you can simply use alternative implementations of RN components.

```
import { Text, View } from 'react-native-themeable';
```


**Q**: I also want normal components.

**A**: But you don't have to use it all the time although in most cases I believe you it won't harm you. You can use it selectively if you want.

```
import { View as ThemeableView } from 'react-native-themeable';
```


**Q**: But I don't want to define define new theme every time I need some special color.

**A**: Of course, you can override style as you can for normal RN components. Remember: the aim is to provide functionally compatible components.

```
  <Text style={{color: 'red'}}>Error!</Text>
```


**Q**: So how can I set a theme?

**A**: You can explicitly set it by our component

```
const App = () => <Theme apply={whiteTheme}>...</Theme>;
```

or you can use higher order components (like in Redux)

```
export default theme(whiteTheme)(App);
```

And ES7 decorators should work too.

```
@theme(blackTheme)
class Header ....
```


**Q**: And how does a theme look like?

**A**: Theme is a function that computes from the `type` and original `props` the new `props` that should be applied.
Originally we thought that `style` objects should be enough but lot of components use their props for visual effects like `TouchableHighlight.underlayColor`


**Q**: Do I really have to define a function?

**A**: Not really, you can use our helper methods to create theme (function) in more convenient way, e.g.

```
const redTheme = withStyles([
  {
    $type: Text,
    color: 'white',
    fontSize: 26,
  }, {
    $type: View,
    backgroundColor: 'red',
  },
])
```

And we hope that community will come up with another solutions how to define the theme - or even with predefined themes.


**Q**: Why defining a theme as a function?

**A**: We believe it is a very flexible way. Theme creators can implement any logic inside theme function - e.g. use artificial props to make different styles.
```
<Text warning>Hey!</Text>
…
theme = (type, props) => { style : {color: props.warning ? ‘orange’ : ‘black’ }}
```

**Q**: Do you call theme function every time you render a component?

**A**: Yes, we don’t cache results of theme function as functions do not have to be pure. Theme creators can provides different styles (maybe flexbox) based on device orientation. However if your theme function is pure but computationally expensive, you can can cache results in the function.
