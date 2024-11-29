export function getProperty(prop: string) {
  return getComputedStyle(document.querySelector(':root')!).getPropertyValue(prop);
}
