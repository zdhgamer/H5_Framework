var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WebSocketReceiveMsgData = (function () {
    function WebSocketReceiveMsgData() {
    }
    Object.defineProperty(WebSocketReceiveMsgData.prototype, "MsgId", {
        get: function () {
            return this.msgId;
        },
        set: function (value) {
            this.msgId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebSocketReceiveMsgData.prototype, "MsgData", {
        get: function () {
            return this.msgData;
        },
        set: function (value) {
            this.msgData = value;
        },
        enumerable: true,
        configurable: true
    });
    return WebSocketReceiveMsgData;
}());
__reflect(WebSocketReceiveMsgData.prototype, "WebSocketReceiveMsgData");
//# sourceMappingURL=WebSocketReceiveMsgData.js.map