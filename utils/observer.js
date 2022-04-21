export default function observer(section, callback, threshold = 0) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold,
    }
  );
  observer.observe(section);
}
