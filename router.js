/**
 * 路由文件, 用于分发请求
 */
function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Request not found");
        response.end();
    }
}

exports.route = route;