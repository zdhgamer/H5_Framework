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
                break;
        }
    };
    AppStartMediator.NAME = 'AppStartMediator';
    return AppStartMediator;
}(puremvc.Mediator));
__reflect(AppStartMediator.prototype, "AppStartMediator");
//# sourceMappingURL=AppStartMediator.js.map