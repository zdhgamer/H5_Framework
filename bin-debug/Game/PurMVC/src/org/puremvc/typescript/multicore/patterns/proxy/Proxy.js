///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IProxy.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotifier.ts'/>
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
     * A base <code>IProxy</code> implementation.
     *
     * In PureMVC, <code>IProxy</code> implementors assume these responsibilities:
     * <UL>
     * <LI>Implement a common method which returns the name of the <code>Proxy</code>.
     * <LI>Provide methods for setting and getting the data object.
     *
     * Additionally, <code>IProxy</code> typically:
     * <UL>
     * <LI>Maintain references to one or more pieces of model data.
     * <LI>Provide methods for manipulating that data.
     * <LI>Generate <code>INotification</code>s when their model data changes.
     * <LI>Expose their name as a <code>constant</code> called <code>NAME</code>, if they are not
     * instantiated multiple times.
     * <LI>Encapsulate interaction with local or remote services used to fetch and persist model
     * data.
     */
    var Proxy = (function (_super) {
        __extends(Proxy, _super);
        /**
         * Constructs a <code>Proxy</code> instance.
         *
         * @param proxyName
         * 		The name of the <code>Proxy</code> instance.
         *
         * @param data
         * 		An initial data object to be held by the <code>Proxy</code>.
         */
        function Proxy(proxyName, data) {
            if (proxyName === void 0) { proxyName = null; }
            if (data === void 0) { data = null; }
            var _this = _super.call(this) || this;
            /**
             * The name of the <code>Proxy</code>.
             *
             * @protected
             */
            _this.proxyName = null;
            /**
             * The data object controlled by the <code>Proxy</code>.
             *
             * @protected
             */
            _this.data = null;
            _this.proxyName = (proxyName != null) ? proxyName : Proxy.NAME;
            if (data != null)
                _this.setData(data);
            return _this;
        }
        /**
         * Get the name of the <code>Proxy></code> instance.
         *
         * @return
         * 		The name of the <code>Proxy></code> instance.
         */
        Proxy.prototype.getProxyName = function () {
            return this.proxyName;
        };
        /**
         * Set the data of the <code>Proxy></code> instance.
         *
         * @param data
         * 		The data to set for the <code>Proxy></code> instance.
         */
        Proxy.prototype.setData = function (data) {
            this.data = data;
        };
        /**
         * Get the data of the <code>Proxy></code> instance.
         *
         * @return
         * 		The data held in the <code>Proxy</code> instance.
         */
        Proxy.prototype.getData = function () {
            return this.data;
        };
        /**
         * Called by the Model when the <code>Proxy</code> is registered. This method has to be
         * overridden by the subclass to know when the instance is registered.
         */
        Proxy.prototype.onRegister = function () {
        };
        /**
         * Called by the Model when the <code>Proxy</code> is removed. This method has to be
         * overridden by the subclass to know when the instance is removed.
         */
        Proxy.prototype.onRemove = function () {
        };
        /**
         * The default name of the <code>Proxy</code>
         *
         * @type
         * @constant
         */
        Proxy.NAME = "Proxy";
        return Proxy;
    }(puremvc.Notifier));
    puremvc.Proxy = Proxy;
    __reflect(Proxy.prototype, "puremvc.Proxy", ["puremvc.IProxy"]);
})(puremvc || (puremvc = {}));
