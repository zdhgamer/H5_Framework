///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotifier.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IFacade.ts'/>
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
///<reference path='../../../../../../org/puremvc/typescript/multicore/patterns/facade/Facade.ts'/>
var puremvc;
(function (puremvc) {
    "use strict";
    /**
     * A base <code>INotifier</code> implementation.
     *
     * <code>MacroCommand</code>, <code>SimpleCommand</code>, <code>Mediator</code> and
     * <code>Proxy</code> all have a need to send <code>Notifications</code>.
     *
     * The <code>INotifier</code> interface provides a common method called
     * <code>sendNotification</code> that relieves implementation code of the necessity to actually
     * construct <code>Notification</code>s.
     *
     * The <code>INotifier</code> interface, which all of the above mentioned classes extend,
     * provides an initialized reference to the <code>Facade</code> singleton, which is required by
     * the convenience method <code>sendNotification</code>	for sending <code>Notifications</code>,
     * but it also eases implementation as these classes have frequent <code>Facade</code>
     * interactions and usually require access to the facade anyway.
     *
     * NOTE: In the MultiCore version of the framework, there is one caveat to notifiers, they
     * cannot send notifications or reach the facade until they have a valid multitonKey.
     *
     * The multitonKey is set:
     * <UL>
     * <LI>On a <code>ICommand</code> when it is executed by the <code>Controller</code>.
     * <LI>On a <code>IMediator</code> is registered with the <code>View</code>.
     * <LI>On a <code>IProxy</code> is registered with the <code>Model</code>.
     */
    var Notifier = (function () {
        function Notifier() {
            /**
             * The multiton key for this core.
             *
             * @protected
             */
            this.multitonKey = null;
        }
        /**
         * Initialize a <code>Notifier</code> instance with its cor multiton key.
         *
         * This is how a <code>Notifier</code> gets its multiton key. Calls to
         * <code>sendNotification <code> or to access the facade will fail until after this method
         * has been called.
         *
         * <code>Mediator</code>s, <code>Command</code>s or <code>Proxies</code> may override
         * this method in order to send notifications or access the multiton Facade instance as
         * soon as possible. They CANNOT access the facade in their constructors, since this
         * method will not yet have been called.
         *
         * @param key
         *		The multiton key for this <code>Notifier</code> to use.
         */
        Notifier.prototype.initializeNotifier = function (key) {
            this.multitonKey = key;
        };
        /**
         * Create and send a <code>Notification</code>.
         *
         * Keeps us from having to construct new <code>Notification</code> instances in our
         * implementation code.
         *
         * @param name
         * 		The name of the notification to send.
         *
         * @param body
         * 		The body of the notification.
         *
         * @param type
         * 		The type of the notification.
         */
        Notifier.prototype.sendNotification = function (name, body, type) {
            if (body === void 0) { body = null; }
            if (type === void 0) { type = null; }
            if (this.facade())
                this.facade().sendNotification(name, body, type);
        };
        /**
         * Return the multiton <code>Facade</code> instance.
         *
         * @return
         *		The multiton <code>Facade</code> instance.
         *
         * @throws
         *		Throws an error if the multiton key for this Notifier is not yet initialized.
         */
        Notifier.prototype.facade = function () {
            if (this.multitonKey === null)
                throw Error(Notifier.MULTITON_MSG);
            return puremvc.Facade.getInstance(this.multitonKey);
        };
        /**
         * Message Constants
         *
         * @constant
         * @protected
         */
        Notifier.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
        return Notifier;
    }());
    puremvc.Notifier = Notifier;
    __reflect(Notifier.prototype, "puremvc.Notifier", ["puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
