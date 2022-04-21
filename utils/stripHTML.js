export default function stripHTML(html = "") {
  return html.replace(/(<([^>]+)>)|(\\n)/gim, "");
}
