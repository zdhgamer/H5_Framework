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
        this.initSound();
        var appStartProxy = _super.prototype.facade.call(this).retrieveProxy(AppStartProxy.NAME);
        var mainStage = notification.getBody();
        UIManager.getInstane().MainStage = mainStage;
        appStartProxy.StartedApp();
    };
    /**
     * 初始化网络
     */
    AppStartCommand.prototype.initWebSocket = function () {
        WebSocketManager.getInstance().onSocketOpenCall = this.onSocketOpen.bind(this);
        WebSocketManager.getInstance().onSocketCloseCall = this.onSocketClose.bind(this);
        WebSocketManager.getInstance().onSocketIOErrorCall = this.onSocketIOError.bind(this);
        WebSocketManager.getInstance().connectToServer();
    };
    /**
     * 初始化音乐和音效
     */
    AppStartCommand.prototype.initSound = function () {
        SoundManager.getInstance();
        var timer = new egret.Timer(5000, 1);
        timer.addEventListener(egret.TimerEvent.TIMER, this.onSoundTimerCall, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onSoundTimerComplete, this);
        //开始计时
        timer.start();
    };
    /**
     * 音乐定时器触发
     */
    AppStartCommand.prototype.onSoundTimerCall = function () {
        SoundManager.getInstance().playTest();
    };
    /**
     *  音乐定时器结束
     */
    AppStartCommand.prototype.onSoundTimerComplete = function () {
    };
    /**
     * 网络连接成功
     */
    AppStartCommand.prototype.onSocketOpen = function () {
        console.log(this);
        var temp = new awesomepackage.ZZ();
        temp.aa = "zdh";
        var msgWrite = awesomepackage.ZZ.encode(temp);
        var msgData = msgWrite.finish();
        console.log(new Date().getTime());
        WebSocketManager.getInstance().sendMsg(SocketEvents.TestMID, msgData, this.onReceiveTest);
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
    /**
     * 接收到测试消息
     */
    AppStartCommand.prototype.onReceiveTest = function (msg) {
        console.log(new Date().getTime());
        console.log("收到服务器的消息" + msg.MsgData);
        var data = awesomepackage.ZZ.decode(msg.MsgData);
        console.log("解析出来，服务器返回的消息是：" + data.aa);
    };
    return AppStartCommand;
}(puremvc.SimpleCommand));
__reflect(AppStartCommand.prototype, "AppStartCommand");
//# sourceMappingURL=AppStartCommand.js.map