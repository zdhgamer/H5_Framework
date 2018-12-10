///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotification.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IObserver.ts'/>
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var puremvc;
(function (puremvc) {
    "use strict";
    /**
     * A base <code>IObserver</code> implementation.
     *
     * In PureMVC, the <code>Observer</code> class assumes these responsibilities:
     * <UL>
     * <LI>Encapsulate the notification (callback) method of the interested object.
     * <LI>Encapsulate the notification context (this) of the interested object.
     * <LI>Provide methods for setting the interested object notification method and context.
     * <LI>Provide a method for notifying the interested object.
     *
     * PureMVC does not rely upon underlying event models such as the one provided in JavaScript DOM API,
     * and TypeScript does not have an inherent event model.
     *
     * The Observer Pattern as implemented within PureMVC exists to support event driven
     * communication between the application and the actors of the MVC triad (Model, View, Controller).
     *
     * An Observer is an object that encapsulates information about an interested object with a
     * notification method that should be called when an </code>INotification</code> is broadcast.
     * The Observer then acts as a proxy for notifying the interested object.
     *
     * Observers can receive <code>Notification</code>s by having their <code>notifyObserver</code>
     * method invoked, passing in an object implementing the <code>INotification</code> interface,
     * such as a subclass of <code>Notification</code>.
     */
    var Observer = (function () {
        /**
         * Constructs an <code>Observer</code> instance.
         *
         * @param notifyMethod
         * 		The notification method of the interested object.
         *
         * @param notifyContext
         * 		The notification context of the interested object.
         */
        function Observer(notifyMethod, notifyContext) {
            /**
             * The notification method of the interested object.
             */
            this.notify = null;
            /**
             * The notification context of the interested object.
             */
            this.context = null;
            this.setNotifyMethod(notifyMethod);
            this.setNotifyContext(notifyContext);
        }
        /**
         * Get the notification method.
         *
         * @return
         * 		The notification (callback) method of the interested object.
         */
        Observer.prototype.getNotifyMethod = function () {
            return this.notify;
        };
        /**
         * Set the notification method.
         *
         * The notification method should take one parameter of type <code>INotification</code>.
         *
         * @param notifyMethod
         * 		The notification (callback) method of the interested object.
         */
        Observer.prototype.setNotifyMethod = function (notifyMethod) {
            this.notify = notifyMethod;
        };
        /**
         * Get the notification context.
         *
         * @return
         * 		The notification context (<code>this</code>) of the interested object.
         */
        Observer.prototype.getNotifyContext = function () {
            return this.context;
        };
        /**
         * Set the notification context.
         *
         * @param notifyContext
         * 		The notification context (this) of the interested object.
         */
        Observer.prototype.setNotifyContext = function (notifyContext) {
            this.context = notifyContext;
        };
        /**
         * Notify the interested object.
         *
         * @param notification
         * 		The <code>INotification</code> to pass to the interested object's notification
         * 		method.
         */
        Observer.prototype.notifyObserver = function (notification) {
            this.getNotifyMethod().call(this.getNotifyContext(), notification);
        };
        /**
         * Compare an object to the notification context.
         *
         * @param object
         * 		The object to compare.
         *
         * @return
         * 		The object and the notification context are the same.
         */
        Observer.prototype.compareNotifyContext = function (object) {
            return object === this.context;
        };
        return Observer;
    }());
    puremvc.Observer = Observer;
    __reflect(Observer.prototype, "puremvc.Observer", ["puremvc.IObserver"]);
})(puremvc || (puremvc = {}));
