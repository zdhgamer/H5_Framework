var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PurMVCEvents = (function () {
    function PurMVCEvents() {
    }
    /*
    * app启动命令
    */
    PurMVCEvents.AppStart = "AppStart";
    /*
* app启动命令
*/
    PurMVCEvents.AppStarted = "AppStarted";
    return PurMVCEvents;
}());
__reflect(PurMVCEvents.prototype, "PurMVCEvents");
//# sourceMappingURL=PurMVCEvents.js.map