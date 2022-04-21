/**
 *
 * @param {String} prop The CSS variable to get
 * @param {HTMLElement} el Optional element to scope
 * @returns {String} The CSS prop
 */
export default function getCSSProp(prop, el) {
  const rootEl = !el ? getComputedStyle(document.documentElement) : el;
  return rootEl.getPropertyValue(prop);
}
