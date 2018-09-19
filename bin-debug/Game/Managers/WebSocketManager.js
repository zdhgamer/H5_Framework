var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WebSocketManager = (function () {
    function WebSocketManager() {
        this.socket = new egret.WebSocket();
        this.msgFunctionMap = {};
        if (!this.socket) {
            this.socket = new egret.WebSocket();
        }
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMsg, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
    }
    WebSocketManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new WebSocketManager();
        }
        return this.instance;
    };
    /**
     * 连接远程服务器
     */
    WebSocketManager.prototype.connectToServer = function () {
        this.socket.connectByUrl(AppConst.webSocketServerUrl);
    };
    /**
     * 服务器连接成功回调
     */
    WebSocketManager.prototype.onSocketOpen = function () {
        console.log("服务器连接成功");
        if (this.onSocketOpenCall) {
            this.onSocketOpenCall();
        }
    };
    /**
     * 服务器断开连接回调
     */
    WebSocketManager.prototype.onSocketClose = function () {
        console.log("与服务器断开连接");
        if (this.onSocketCloseCall) {
            this.onSocketCloseCall();
        }
    };
    /**
     * 发生IO错误回调
     */
    WebSocketManager.prototype.onSocketIOError = function () {
        console.log("产生io错误");
        if (this.onSocketIOErrorCall) {
            this.onSocketIOErrorCall();
        }
    };
    /**
     * 收到消息回调
     */
    WebSocketManager.prototype.onReceiveMsg = function (e) {
        var bytes = new egret.ByteArray();
        this.socket.readBytes(bytes);
        var msgId = parseInt(bytes.readUTFBytes(4));
        var msgValue = new Uint8Array(bytes.buffer.slice(4, bytes.bytesAvailable + 4));
        var msgData = new WebSocketReceiveMsgData();
        msgData.MsgId = msgId;
        msgData.MsgData = msgValue;
        this.dispatchMsg(msgData);
    };
    /**
     * 主动断开连接
     */
    WebSocketManager.prototype.closeConnect = function () {
        this.socket.close();
    };
    /**
     * 注册消息监听回调
     */
    WebSocketManager.prototype.registerMsgFunction = function (msgId, callBack) {
        if (!this.msgFunctionMap[msgId]) {
            this.msgFunctionMap[msgId] = [];
            this.msgFunctionMap[msgId].push(callBack);
        }
        else {
            var funList = this.msgFunctionMap[msgId];
            var index = funList.indexOf(callBack);
            if (index < 0) {
                funList.push(callBack);
            }
        }
    };
    /**
     * 清除该msgId下面的所有
     */
    WebSocketManager.prototype.removeAllMsgFunction = function (msgId) {
        if (!this.msgFunctionMap[msgId]) {
            this.msgFunctionMap[msgId] = null;
        }
    };
    /**
     * 移除一个消息监听
     */
    WebSocketManager.prototype.removeMsgFunction = function (msgId, callBack) {
        if (this.msgFunctionMap[msgId]) {
            var index = this.msgFunctionMap[msgId].indexOf(callBack);
            if (this.msgFunctionMap[msgId].length > 0 && index >= 0) {
                this.msgFunctionMap[msgId].splice(index, index + 1);
                if (this.msgFunctionMap[msgId].length <= 0) {
                    this.msgFunctionMap[msgId] = null;
                }
            }
        }
    };
    /**
     * 分发收到的消息
     */
    WebSocketManager.prototype.dispatchMsg = function (msgData) {
        var msgId = msgData.MsgId;
        var temp = this.msgFunctionMap[msgId];
        if (this.msgFunctionMap[msgId]) {
            for (var i = 0; i < this.msgFunctionMap[msgId].length; i++) {
                if (this.msgFunctionMap[msgId][i]) {
                    this.msgFunctionMap[msgId][i](msgData);
                }
            }
        }
    };
    /**
     * 主动发送消息给服务器
     */
    WebSocketManager.prototype.sendMsg = function (msgId, msg, callBack) {
        if (callBack) {
            this.registerMsgFunction(msgId, callBack);
        }
        var msgData = new egret.ByteArray(msg);
        var msgArray = new egret.ByteArray();
        msgArray.writeUTFBytes(msgId + "");
        msgArray.writeBytes(msgData);
        this.socket.writeBytes(msgArray, 0, msgArray.bytesAvailable);
    };
    return WebSocketManager;
}());
__reflect(WebSocketManager.prototype, "WebSocketManager");
//# sourceMappingURL=WebSocketManager.js.map