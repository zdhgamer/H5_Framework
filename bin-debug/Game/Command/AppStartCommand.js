var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var AppStartCommand = (function (_super) {
    __extends(AppStartCommand, _super);
    function AppStartCommand() {
        return _super.call(this) || this;
    }
    AppStartCommand.prototype.execute = function (notification) {
        _super.prototype.execute.call(this, notification);
        this.initWebSocket();
        HttpClientManager.getInstance().sendHttpPostForm("http://localhost:8888/BD/UserLoginServletAction", function (result, data) {
        }, null);
        var appStartProxy = _super.prototype.facade.call(this).retrieveProxy(AppStartProxy.NAME);
        appStartProxy.StartedApp();
    };
    /**
     * 初始化网络
     */
    AppStartCommand.prototype.initWebSocket = function () {
        WebSocketManager.getInstance().onSocketOpenCall = this.onSocketOpen;
        WebSocketManager.getInstance().onSocketCloseCall = this.onSocketClose;
        WebSocketManager.getInstance().onSocketIOErrorCall = this.onSocketIOError;
        WebSocketManager.getInstance().connectToServer();
    };
    // /**
    //  * 测试注册监听
    //  */
    // private registerTest():void{
    // 	WebSocketManager.getInstance().registerMsgFunction(SocketEvents.TestMID,this.onReceiveTest);
    // }
    /**
     * 网络连接成功
     */
    AppStartCommand.prototype.onSocketOpen = function () {
        // let temp = new awesomepackage.ZZ();
        // temp.aa = "zdh";
        // let msgWrite = awesomepackage.ZZ.encode(temp);
        // let msgData = msgWrite.finish();
        // WebSocketManager.getInstance().sendMsg(SocketEvents.TestMID,msgData);
    };
    /**
     * 与服务器连接关闭
     */
    AppStartCommand.prototype.onSocketClose = function () {
    };
    /**
     * 发生IO错误
     */
    AppStartCommand.prototype.onSocketIOError = function () {
    };
    return AppStartCommand;
}(puremvc.SimpleCommand));
__reflect(AppStartCommand.prototype, "AppStartCommand");
//# sourceMappingURL=AppStartCommand.js.map