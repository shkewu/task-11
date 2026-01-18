let parser;

function createDOMElementFromStr(str) {
  parser ??= new DOMParser();
  return parser.parseFromString(str, "text/html").body.firstElementChild;
}

export {createDOMElementFromStr};
