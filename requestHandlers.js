/**
 * 请求处理文件
 */

// 在node中异步执行命令行命令的lib
var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");
  // 异步执行, 可以让本次请求快速结束从而让node去接受下一次的请求(如果在请求中有阻塞的方法, 那后面请求也会阻塞, 因为node是单线程的, 基于事件轮询的)
  exec("find /", {timeout:100000, maxBuffer: 20000*1024}, function(err, stdout, stderr){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
  });
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;