## 介绍

1. demo是用vue2.x搭建的前端项目
2. connectmysql-pro是用express框架的项目生成器express-generator创建的后端项目

## 使用步骤

1.分别在demo和connectmysql-pro目录下运行npm install命令安装各项依赖包

2.到connectmysql-pro目录下运行npm start启动后端服务,默认3000端口,其中db文件夹中db.js是连接MySQL数据库的配置

3.注意在config文件夹下的index.js中设置了代理,目的是解决axios请求后端数据库时产生的跨域

4.routes文件夹下index.js中是后端路由逻辑处理

实例测试接口:

```javascript
router.get('/abc', function(req, res, next) {
   connection.query('SELECT * from stu',function(error, results, fields) {
     if(error) throw error;
     res.json(results);
   })

 });
```

如此一来,前端发送请求,后端接收请求,从数据库中获取数据响应给前端去渲染页面,前端+后台+数据库无缝连接就是这么简单啦,赶紧体验一条龙服务吧.

