var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// 配置项目的路由
var handler = {};
handler["/"] = requestHandlers.start;
handler["/start"] = requestHandlers.start;
handler["/upload"] = requestHandlers.upload;
handler["/show"] = requestHandlers.show;

server.start(router.route, handler);