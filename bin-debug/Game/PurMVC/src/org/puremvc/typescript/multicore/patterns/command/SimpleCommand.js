///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/ICommand.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotifier.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotification.ts'/>
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
///<reference path='../../../../../../org/puremvc/typescript/multicore/patterns/observer/Notifier.ts'/>
var puremvc;
(function (puremvc) {
    "use strict";
    /**
     * A base <code>ICommand</code> implementation.
     *
     * Your subclass should override the <code>execute</code> method where your business logic will
     * handle the <code>INotification</code>.
     */
    var SimpleCommand = (function (_super) {
        __extends(SimpleCommand, _super);
        function SimpleCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Fulfill the use-case initiated by the given <code>INotification</code>.
         *
         * In the Command Pattern, an application use-case typically begins with some user action,
         * which results in an <code>INotification</code> being broadcast, which is handled by
         * business logic in the <code>execute</code> method of an <code>ICommand</code>.
         *
         * @param notification
         * 		The <code>INotification</code> to handle.
         */
        SimpleCommand.prototype.execute = function (notification) {
        };
        return SimpleCommand;
    }(puremvc.Notifier));
    puremvc.SimpleCommand = SimpleCommand;
    __reflect(SimpleCommand.prototype, "puremvc.SimpleCommand", ["puremvc.ICommand"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=SimpleCommand.js.map