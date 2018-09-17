var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WebSocketManager = (function () {
    function WebSocketManager() {
        this.socket = new egret.WebSocket();
        if (!this.socket) {
            this.socket = new egret.WebSocket();
        }
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMsg, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
    }
    WebSocketManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new WebSocketManager();
        }
        return this.instance;
    };
    WebSocketManager.prototype.onSocketOpen = function () {
    };
    WebSocketManager.prototype.onSocketClose = function () {
    };
    WebSocketManager.prototype.onReceiveMsg = function (e) {
    };
    WebSocketManager.prototype.closeConnect = function () {
        this.socket.close();
    };
    return WebSocketManager;
}());
__reflect(WebSocketManager.prototype, "WebSocketManager");
//# sourceMappingURL=WebSocketManager.js.map