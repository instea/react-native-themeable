/**
* Helper to ease constructing `apply` function for styles only.
* @param { fuction } fn mapping from type and props to styles
* @returns { function } apply function
*/
export const applyStyle = fn => (type, props) => {
  const style = fn(type, props)
  return { ...props, style: [ style, props.style ] }
}
