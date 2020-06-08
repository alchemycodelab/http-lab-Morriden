module.exports = rawRequest => {
  const parsedRequest = rawRequest.split(' ');
  const [method, path] = parsedRequest;
  const [, body] = rawRequest.split('\r\n\r\n');

  if(body) {
    return {
      method,
      path,
      body
    };
  } else {

    return {
      method,
      path
    };
  }
};
