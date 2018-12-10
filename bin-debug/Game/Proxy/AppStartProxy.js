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
var AppStartProxy = (function (_super) {
    __extends(AppStartProxy, _super);
    function AppStartProxy() {
        var _this = _super.call(this) || this;
        _this.appStartEntity = new AppStartEntity();
        return _this;
    }
    AppStartProxy.prototype.getProxyName = function () {
        return this.proxyName;
    };
    AppStartProxy.prototype.StartedApp = function () {
        this.appStartEntity.AppStarted = true;
        _super.prototype.sendNotification.call(this, PurMVCEvents.AppStarted);
    };
    AppStartProxy.proxyName = "AppStartProxy";
    return AppStartProxy;
}(puremvc.Proxy));
__reflect(AppStartProxy.prototype, "AppStartProxy");
