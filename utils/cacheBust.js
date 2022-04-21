/**
 * @returns {String} - Current date for cache bust
 */
export default function cacheBust() {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  return `${year}-${month}-${date}-${hours}-${minutes}-${seconds}`;
}
