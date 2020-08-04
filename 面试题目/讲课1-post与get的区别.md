## Post 和 Get 的区别


1. GET 在浏览器回退时是无害的，而 POST 会再次提交请求`(记)`
2. GET 产生的 URL 地址可以被收藏，而 POST 不可以
3. GET 请求会被浏览器主动缓存，而 POST 不会，除非手动设置`(记)`
  4. GET 请求只能进行 url 编码，而 POST 支持多种编码方式
5. GET 请求参数会被完整保留在浏览器的历史记录里，而 POST 的参数不会被保留`(记)`
6.  GET 请求在 URL 中传送的参数是有长度限制的，而 POST 没有限制`(记)`
7.  对参数据类型，GET 只接受 ASCII 字符，而 POST 没有限制
8.  GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息
9. GET 参数通过 URL 传递， POST 放在 Request body 中`(记)`