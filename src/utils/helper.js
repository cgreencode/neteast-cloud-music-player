const httpToHttps = (url) => {
  return url && url.match('^http://') ? url.replace('http://', 'https://') : url
}

export {
  httpToHttps
}
