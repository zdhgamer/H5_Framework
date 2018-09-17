var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AppStartEntity = (function () {
    function AppStartEntity() {
        this.appStarted = false;
    }
    Object.defineProperty(AppStartEntity.prototype, "AppStarted", {
        get: function () {
            return this.appStarted;
        },
        set: function (value) {
            this.appStarted = value;
        },
        enumerable: true,
        configurable: true
    });
    return AppStartEntity;
}());
__reflect(AppStartEntity.prototype, "AppStartEntity");
//# sourceMappingURL=AppStartEntity.js.map