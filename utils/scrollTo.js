import { TweenMax, Power4 } from "gsap";

export default function scrollTo(y = 0, onComplete = () => {}, duration = 1) {
  if (process.browser) {
    const scrollTo = require("gsap/umd/ScrollToPlugin");
    const plugins = [scrollTo];
    TweenMax.to(window, duration, {
      scrollTo: { y },
      ease: Power4.easeInOut,
      onComplete,
    });
  }
}
