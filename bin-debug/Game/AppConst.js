var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AppConst = (function () {
    function AppConst() {
    }
    /**
     * websocket服务器地址
     */
    AppConst.webSocketServerUrl = "ws://127.0.0.1:8282";
    return AppConst;
}());
__reflect(AppConst.prototype, "AppConst");
