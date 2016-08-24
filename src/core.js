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
      [APPLY_KEY]: this.props.apply
    }
  }
}
Theme.childContextTypes = {
  [APPLY_KEY]: React.PropTypes.func.isRequired
}

/**
 * Decorator to plug component into themeable system.
 */
export const themeable = Component => {

  // TODO: themeable functional components

  function applyTheme(props, ctx) {
    if (ctx && ctx[APPLY_KEY]) {
      const apply = ctx[APPLY_KEY]
      return {
        ...Component.defaultProps,
        ...apply(RNTComponent, props),
      }
    }
    return {
      ...Component.defaultProps,
      ...props,
    }
  }

  class RNTComponent extends Component {

    constructor(originalProps, ctx) {
      const props = applyTheme(originalProps, ctx)
      super(props)
    }

    get props() {
      return applyTheme(this[ORIG_PROPS_KEY], this.context)
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
    [APPLY_KEY]: React.PropTypes.func
  }

  if (__DEV__) {
    // suppress warning message when calling `super` with modified props
    console.ignoredYellowBox = [
      ...(console.ignoredYellowBox || []),
      `Warning: ${RNTComponent.displayName}(...): When calling super() in`
    ]
  }

  return RNTComponent
}

