export default function scrollPassed(scrollPosition = 0) {
  if (scrollY > scrollPosition) return true;
  else return false;
}
