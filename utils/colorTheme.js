const getProp = (prop) =>
  window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(prop)
    .trim();

export default function colorTheme() {
  return {
    get bg() {
      return getProp("--color-bg");
    },
    get bg1() {
      return getProp("--color-bg1");
    },
    get bg2() {
      return getProp("--color-bg2");
    },
    get icon() {
      return getProp("--color-icon");
    },
    get text() {
      return getProp("--color-text");
    },
    get plum() {
      return getProp("--color-plum");
    },
    get magenta() {
      return getProp("--color-magenta");
    },
    get maroon() {
      return getProp("--color-maroon");
    },
    get purple() {
      return getProp("--color-purple");
    },
    get purpleLight() {
      return getProp("--color-purple-light");
    },
    get green() {
      return getProp("--color-green");
    },
    get red() {
      return getProp("--color-red");
    },
  };
}
