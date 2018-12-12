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
var AppStartMediator = (function (_super) {
    __extends(AppStartMediator, _super);
    function AppStartMediator() {
        return _super.call(this) || this;
    }
    AppStartMediator.prototype.listNotificationInterests = function () {
        var result = new Array();
        result.push(PurMVCEvents.AppStarted);
        return result;
    };
    AppStartMediator.prototype.handleNotification = function (notification) {
        _super.prototype.handleNotification.call(this, notification);
        switch (notification.getName()) {
            case PurMVCEvents.AppStarted:
                console.log("框架启动完成");
                this.loadMainView();
                break;
        }
    };
    /**
     * 加载一个测试界面
     */
    AppStartMediator.prototype.loadMainView = function () {
        this.mainView = new MainView();
        UIManager.getInstane().addSubView(this.mainView);
        this.mainView.Button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTestBtnClick.bind(this), this);
        console.log("当前舞台子组件个数：" + UIManager.getInstane().MainStage.numChildren);
    };
    /**
     * 测试按钮点击方法
     */
    AppStartMediator.prototype.onTestBtnClick = function () {
        console.log(this);
        this.tips = new Tips();
        UIManager.getInstane().addSubView(this.tips);
        console.log("当前舞台子组件个数：" + UIManager.getInstane().MainStage.numChildren);
        this.autho();
    };
    /**
     * 微信授权
     */
    AppStartMediator.prototype.autho = function () {
        var appid = "wx20b7d401030b8032";
        var appsecret = "abf14af264d2c32216c881b73b687721";
        var redirect_uri = decodeURI("http://47.106.180.129/static/index2.html");
        var scope = "snsapi_userinfo";
        var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=" + redirect_uri + "&response_type=code&scope=" + scope + "&state=STATE#wechat_redirect";
        console.log(url);
        // window.location.href = url;
        HttpClientManager.getInstance().sendHttpByGet(url, function (data) {
            console.log(data);
        });
    };
    AppStartMediator.NAME = 'AppStartMediator';
    return AppStartMediator;
}(puremvc.Mediator));
__reflect(AppStartMediator.prototype, "AppStartMediator");
//# sourceMappingURL=AppStartMediator.js.map