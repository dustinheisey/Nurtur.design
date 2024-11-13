export function getProperty(prop) {
  return getComputedStyle(document.querySelector(':root')).getPropertyValue(
    prop
  )
}
