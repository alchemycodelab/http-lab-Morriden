module.exports = rawRequest => {
  const parsedRequest = rawRequest.split(' ');
  const [method, path, , , body] = parsedRequest;
  if(body.includes('\n')) {
    const bodyParsed = body.split('\n');
    return {
      method: method,
      path: path,
      body: bodyParsed[2]
    };
  } else {

    return {
      method: method,
      path: path
    };
  }
};
