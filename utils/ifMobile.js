/**
 * Check if a mobile device, except the iPads, they can handle the load nowadays lol
 * @returns {Boolean}
 */
export default function ifMobile() {
  if (process.browser) {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      //navigator.userAgent.match(/iPod/i) ||
      //navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/Opera Mini/i)
    )
      return true;
    else return false;
  }
}
