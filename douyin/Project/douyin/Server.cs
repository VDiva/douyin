using Fleck;
using System.Net.Sockets;
using System.Net.WebSockets;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;

using TouchSocket.Http;
using TouchSocket.Core;
using TouchSocket.Http.WebSockets;
using TouchSocket.Sockets;
using TouchSocket.Rpc;
using TouchSocket.Rpc.WebApi;
using Newtonsoft.Json;
using Microsoft.Win32;
using Douyin;
using System.Diagnostics;
using Newtonsoft.Json.Linq;

namespace douyin
{
    internal class Server
    {

        static void Main(string[] args)
        {

            



            var service = new HttpService();

            

            ServerData.server = service;
            service.Setup(new TouchSocketConfig()//加载配置
                .UsePlugin()
                .SetListenIPHosts(new IPHost[] { new IPHost(9999),new IPHost(8888) })
                .ConfigureContainer(a =>
                {
                    a.AddConsoleLogger();
                })
                .ConfigureRpcStore(a =>
                {
                    a.RegisterServer<TcpServer>();
                })
                .ConfigurePlugins(a =>
                {
                    a.UseWebApi();
                    a.UseWebSocket();//不用设置连接url

                    a.Add<MyWebSocketPlugin>();
                }))
                .Start();

            Console.WriteLine("服务器已启动，可使用下列地址接收消息");
            Console.WriteLine("ws://127.0.0.1:8888/TcpServer/ConnectWS");

            Console.ReadKey();



            

        }
    }
    public static class ServerData
    {
        
        
        public static HttpService server=new HttpService();

        static List<HttpSocketClient> Clients=new List<HttpSocketClient>();

        public static void AddClient(HttpSocketClient client)
        {
            Clients.Add(client);
        }

        public static void Send(string text)
        {
            JObject jobject = JsonConvert.DeserializeObject(text) as JObject;
            Data data=null;
            dynamic dataMap = jobject;


            data = new Data();
            data.Method = dataMap.common.method;
            
            switch (data.Method)
            {
                case "WebcastChatMessage":
                    data.User = new User
                    {
                        Name = dataMap.user.nickname,
                        ImgUrl = dataMap.user.avatarThumb.urlListList[0]
                    };
                    data.Content = dataMap.content;
                    Console.WriteLine("聊天消息:" + data.User.Name+":" + data.Content);


                    //foreach (var item in Clients)
                    //{
                    //    try
                    //    {

                    //        item.SendWithWS("聊天消息:" + data.User.Name + data.Content);
                    //    }
                    //    catch (Exception ex)
                    //    {
                    //        Clients.Remove(item);
                    //        Console.WriteLine(ex.ToString());
                    //        break;
                    //    }
                    //}

                    break;
                case "WebcastLikeMessage":
                    data.User = new User
                    {
                        Name = dataMap.user.nickname,
                        ImgUrl = dataMap.user.avatarThumb.urlListList[0]
                    };
                    data.LikeUpCount = dataMap.count;
                    Console.WriteLine("点赞消息:" + data.User.Name + ":点了" + data.LikeUpCount + "个赞");





                    //foreach (var item in Clients)
                    //{
                    //    try
                    //    {

                    //        item.SendWithWS("点赞消息:" + data.User.Name + "点赞:" + data.LikeUpCount + "个赞");
                    //    }
                    //    catch (Exception ex)
                    //    {
                    //        Clients.Remove(item);
                    //        Console.WriteLine(ex.ToString());
                    //        break;
                    //    }
                    //}
                    break;
                case "WebcastGiftMessage":
                    data.User = new User
                    {
                        Name = dataMap.user.nickname,
                        ImgUrl = dataMap.user.avatarThumb.urlListList[0]
                    };
                    data.Gift = new Gift
                    {
                        Name = dataMap.gift.name,
                        DiamondCount = dataMap.gift.diamondCount,
                        Duration = dataMap.gift.duration,
                        ID = dataMap.gift.id,
                        GroupCount = dataMap.groupCount,
                        ImgUrl = dataMap.gift.image.urlListList[0]
                    };
                    Console.WriteLine("礼物消息消息:" + data.User.Name + ":送了价值" + data.Gift.Duration + "的" + data.Gift.Name + "x" + data.Gift.DiamondCount);




                    //foreach (var item in Clients)
                    //{
                    //    try
                    //    {

                    //        item.SendWithWS("礼物消息消息:" + data.User.Name + ":送了价值" + data.Gift.Duration + "的" + data.Gift.Name + "x" + data.Gift.DiamondCount);
                    //    }
                    //    catch (Exception ex)
                    //    {
                    //        Clients.Remove(item);
                    //        Console.WriteLine(ex.ToString());
                    //        break;
                    //    }
                    //}
                    break;
                default:
                    break;
            }




            //Console.WriteLine(data.Method);



            foreach (var item in Clients)
            {
                try
                {

                    item.SendWithWS(JsonConvert.SerializeObject(data));
                }
                catch (Exception ex)
                {
                    Clients.Remove(item);
                    Console.WriteLine(ex.ToString());
                    break;
                }
            }
        }
    }



    public class TcpServer : RpcServer
    {
        private readonly ILog m_logger;

        public TcpServer(ILog logger)
        {
            this.m_logger = logger;
        }

        [Router("/[api]/[action]")]
        [WebApi(HttpMethodType.GET, MethodFlags = MethodFlags.IncludeCallContext)]
        public void ConnectWS(IWebApiCallContext callContext)
        {
            if (callContext.Caller is HttpSocketClient socketClient)
            {
                if (socketClient.SwitchProtocolToWebSocket(callContext.HttpContext))
                {
                    m_logger.Info("WS通过WebApi连接"+socketClient.ServicePort);
                    if (socketClient.ServicePort == 8888)
                    {
                        ServerData.AddClient(socketClient);
                    }
                }
            }
        }
        
        
    }


    public class MyWebSocketPlugin : WebSocketPluginBase<HttpSocketClient>
    {
        protected override void OnHandleWSDataFrame(HttpSocketClient client, WSDataFrameEventArgs e)
        {
            switch (e.DataFrame.Opcode)
            {
               
                case WSDataType.Text:

                    //client.Logger.Info("收到一条信息长度为:"+e.DataFrame.PayloadLength);
                    //client.SendWithWS("我已经收到");
                    if (client.ServicePort == 9999)
                    {
                        ServerData.Send(e.DataFrame.ToText());
                    }
                    break;

                case WSDataType.Binary:
                    if (e.DataFrame.FIN)
                    {
                        client.Logger.Info($"收到二进制数据，长度为：{e.DataFrame.PayloadLength}");
                    }
                    else
                    {
                        client.Logger.Info($"收到未结束的二进制数据，长度为：{e.DataFrame.PayloadLength}");
                    }
                    break;

                default:
                    break;
            }
        }
    }



}
