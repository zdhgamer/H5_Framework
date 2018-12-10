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
var AppStartFacade = (function (_super) {
    __extends(AppStartFacade, _super);
    function AppStartFacade(key) {
        return _super.call(this, key) || this;
    }
    AppStartFacade.getInstance = function (key) {
        if (!puremvc.Facade.instanceMap[key])
            puremvc.Facade.instanceMap[key] = new AppStartFacade(key);
        return puremvc.Facade.instanceMap[key];
    };
    AppStartFacade.prototype.initializeModel = function () {
        _super.prototype.initializeModel.call(this);
        _super.prototype.registerProxy.call(this, new AppStartProxy());
    };
    AppStartFacade.prototype.initializeController = function () {
        _super.prototype.initializeController.call(this);
        _super.prototype.registerCommand.call(this, PurMVCEvents.AppStart, AppStartCommand);
    };
    AppStartFacade.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
        _super.prototype.registerMediator.call(this, new AppStartMediator());
    };
    AppStartFacade.prototype.StartApp = function (mainStage) {
        _super.prototype.sendNotification.call(this, PurMVCEvents.AppStart, mainStage);
    };
    AppStartFacade.Name = "AppStartFacade";
    return AppStartFacade;
}(puremvc.Facade));
__reflect(AppStartFacade.prototype, "AppStartFacade");
