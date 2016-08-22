import React from 'react'
import { View } from 'react-native'

// TODO: Symbols are not implemented in RN, we should consider Symbol polyfill
const APPLY_KEY = 'RNTApply'

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

  class RNTComponent extends Component {
    render() {
      const apply = this.context[APPLY_KEY]
      if (apply) {
        // merge props
        const props = { ...this.props, ...apply(this.constructor, this.props) }
        // extend `this` with merged props
        const AppliedProps = function() {
          this.props = props
        }
        AppliedProps.prototype = this
        return super.render.call(new AppliedProps())
      }
      return super.render()
    }

  }

  RNTComponent.contextTypes = {
    [APPLY_KEY]: React.PropTypes.func
  }

  return RNTComponent
}

