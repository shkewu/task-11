function baseUrl(src) {
  return `/${src}`;
}

function image(src) {
  return `${baseUrl("images")}/${src}`;
}

export {baseUrl, image};