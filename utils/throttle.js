export default function throttle(func, wait) {
  let throttle;
  return function () {
    if (!throttle) {
      func.apply(this, arguments);
      throttle = true;
      setTimeout(() => (throttle = false), wait);
    }
  };
}
