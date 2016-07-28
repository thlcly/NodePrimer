/**
 * 请求处理文件
 */

// 在node中异步执行命令行命令的lib
var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
  /*
  // 异步执行, 可以让本次请求快速结束从而让node去接受下一次的请求(如果在请求中有阻塞的方法, 那后面请求也会阻塞, 因为node是单线程的, 基于事件轮询的)
  exec("find /", {timeout:100000, maxBuffer: 20000*1024}, function(err, stdout, stderr){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
  });
  */
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  response.write("You've sent:" + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;