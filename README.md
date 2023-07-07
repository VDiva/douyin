# douyin
爬取抖音直播间弹幕和礼物信息

好像这个方法并不实用 抖音会变化脚本名称每次更新都需要更新脚本名才能爬取 但是这个比直接使用网页爬取数据简单一点这个是直接拿到抖音信息的原数据在通过websocket发送给自己的服务端由服务端转发给其他客户端

目前只能微软edge浏览器使用 需要在edge浏览器开发者工具中添加本地代码覆盖选择Browser injection/js替换



![image](image/tihuan.png)

在从Run the program/net打开douyin.exe在打开浏览器找你需要的直播间并打开开发者工具 看见有端口9999连接上了就是浏览器连接上了就可以使用了

如果好久都没有可能注入代码引起报错了 刷新浏览器试试不行就多刷新几遍 需要按f12打开开发者模式刷新 如果连没消息可能卡住了重启下

![image](image/lianjie.png)
你可以用自己的websocket接收消息 ws://127.0.0.1:8888/TcpServer/ConnectWS

通过protobuf的proto文件生成你自己的代码进行反序列化

![image](image/shiyon.png)

还有好多值我没有进protobuf如果需要你可以看浏览器的控制台打印的消息自己添加进protobuf里面在修改一下 c#项目代码

