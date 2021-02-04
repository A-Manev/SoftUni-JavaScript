function requestValidator(request) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriRegex = /^[a-zA-Z0-9.]+$|^\*$/g;
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let message = /^[^<>\\&'"]*$/g;

    if (!validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.hasOwnProperty('uri') || !request.uri.match(uriRegex)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!request.hasOwnProperty('message') || !request.message.match(message)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return request;
}