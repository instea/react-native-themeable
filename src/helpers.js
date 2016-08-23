/**
 * Helper to ease constructing `apply` function for styles only.
 * @param { fuction } fn mapping from type and props to styles
 * @returns { function } apply function
 */
export const applyStyle = fn => (type, props) => {
  const style = fn(type, props)
  return { ...props, style: [ style, props.style ] }
}

/**
 * Apply function factory which merges props defined in arguments.
 * Prop definition is an object containing special key `$type` representing
 * component type and other keys which are properties to be passed to element.
 * @param { array } propsDefs array of prop definitions
 * @returns { function } apply function
 */
export const withProps = propsDefs => (type, props) => {
  const def = propsDefs.find(s => s.$type === type)
  if (def) {
    const { $type, ...themeProps } = def // eslint-disable-line
    console.log('original: ', props.underlayColor)
    console.log('theme: ', themeProps.underlayColor)
    const tmp = {
      ...props,
      ...themeProps,
      style: [ themeProps.style, props.style ]
    }
    console.log('result: ', tmp.underlayColor)
    // TODO: it could be possible to override theme props
    return {
      ...props,
      ...themeProps,
      style: [ themeProps.style, props.style ]
    }
  }
  return props
}

/**
 * Apply function factory which merges styles defined in arguments.
 * Style definition is an object containing special key `$type` representing
 * component type and other keys which are styles to be passed to element.
 * @param { array } stylesDefs array of style definitions
 * @returns { function } apply function
 */
export const withStyles = stylesDefs => (type, props) => {
  const def = stylesDefs.find(s => s.$type === type)
  if (def) {
    const { $type, ...themeStyle } = def // eslint-disable-line
    return { ...props, style: [ themeStyle, props.style ] }
  }
  return props
}
