/**
* Helper to ease constructing `apply` function for styles only.
* @param { fuction } fn mapping from type and props to styles
* @returns { function } apply function
*/
export const applyStyle = fn => (type, props) => {
  const style = fn(type, props)
  // TODO: how to override default component styles
  return { ...props, style: [ props.style, style ] }
}
