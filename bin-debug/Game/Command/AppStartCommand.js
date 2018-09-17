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
        var appStartProxy = _super.prototype.facade.call(this).retrieveProxy(AppStartProxy.NAME);
        appStartProxy.StartedApp();
    };
    return AppStartCommand;
}(puremvc.SimpleCommand));
__reflect(AppStartCommand.prototype, "AppStartCommand");
//# sourceMappingURL=AppStartCommand.js.map