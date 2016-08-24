import React from 'react'
import { View } from 'react-native'

/*global __DEV__*/

const APPLY_KEY = 'RNTApply'
const ORIG_PROPS_KEY = 'RNTOriginalProps'

/**
 * Component which defines theme function (apply) for its children.
 */
export class Theme extends View {
  getChildContext() {
    return {
      [APPLY_KEY]: this.props.apply,
    }
  }
}
Theme.childContextTypes = {
  [APPLY_KEY]: React.PropTypes.func.isRequired,
}

/**
 * Decorator which injects theme context to the component.
 */
export const theme = apply => Component => {
  class ThemeDecorator extends Component {
    getChildContext() {
      const childContext = super.getChildContext && super.getChildContext()
      return {
        ...childContext,
        [APPLY_KEY]: apply,
      }
    }
  }
  ThemeDecorator.childContextTypes = {
    ...Component.childContextTypes,
    [APPLY_KEY]: React.PropTypes.func.isRequired,
  }
  return ThemeDecorator
}

/**
 * Decorator to plug component into themeable system.
 */
export const themeable = Component => {
  const isFunctional = !Component.prototype || !Component.prototype.render
  if (isFunctional) {
    return makeFunctinalComponent(Component)
  }
  return makeComponent(Component)
}

function makeComponent(Component) {

  class RNTComponent extends Component {

    constructor(originalProps, ctx) {
      const props = applyTheme(originalProps, ctx, Component, RNTComponent)
      super(props)
    }

    get props() {
      return applyTheme(this[ORIG_PROPS_KEY], this.context, Component, RNTComponent)
    }

    set props(originalProps) {
      this[ORIG_PROPS_KEY] = originalProps
    }

  }

  RNTComponent.defaultProps = {}

  RNTComponent.displayName = 'RNT_' + (
    Component.displayName || Component.name || 'Component'
  )

  RNTComponent.contextTypes = {
    [APPLY_KEY]: React.PropTypes.func,
  }

  if (__DEV__) {
    // suppress warning message when calling `super` with modified props
    console.ignoredYellowBox = [
      ...(console.ignoredYellowBox || []),
      `Warning: ${RNTComponent.displayName}(...): When calling super() in`,
    ]
  }

  return RNTComponent
}

function makeFunctinalComponent(Component) {

  function RNTComponent(props, ctx) {
    return Component(applyTheme(props, ctx, Component, RNTComponent), ctx)
  }

  RNTComponent.contextTypes = {
    [APPLY_KEY]: React.PropTypes.func,
  }

  return RNTComponent
}

function applyTheme(props, ctx, OriginalComponent, NewComponent) {
  if (ctx && ctx[APPLY_KEY]) {
    const apply = ctx[APPLY_KEY]
    return {
      ...OriginalComponent.defaultProps,
      ...apply(NewComponent, props),
    }
  }
  return {
    ...OriginalComponent.defaultProps,
    ...props,
  }
}
