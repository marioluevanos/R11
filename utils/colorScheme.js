/**
 * Control the dark/light mode appearance.
 */
export default async function colorScheme() {
  const storage = await this.$store.dispatch("user/loadStorage");
  const storageTheme = storage && storage.theme;
  const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const initializeWithDarkMode = storageTheme
    ? storageTheme
    : systemDarkMode.matches;

  onChange.call(this, initializeWithDarkMode);
  systemDarkMode.addEventListener("change", (event) =>
    onChange.call(this, event.matches ? "dark" : "light")
  );
}

/**
 * @param {String|Boolean} mode
 */
function onChange(mode) {
  this.$store.dispatch("user/setUserTheme", whichMode(mode));
}

/**
 * @param {String|Boolean} mode
 * @returns {String}
 */
function whichMode(mode) {
  if (typeof mode === "boolean") {
    return mode ? "dark" : "light";
  }
  if (typeof mode === "string") {
    return mode === "auto" ? "auto" : mode;
  }
  return "auto";
}
