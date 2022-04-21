export default function getFirstSentence(p = "") {
  const words = p.split("");
  const firstPeriod = words.indexOf(".");
  const firstSentence = words.slice(0, firstPeriod + 1).join("");
  return firstSentence;
}
