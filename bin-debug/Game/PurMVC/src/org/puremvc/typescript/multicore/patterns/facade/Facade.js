///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IFacade.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IModel.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IView.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IController.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IProxy.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/IMediator.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotification.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/core/Controller.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/core/Model.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/core/View.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/patterns/observer/Notification.ts'/>
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var puremvc;
(function (puremvc) {
    "use strict";
    /**
     * A base multiton <code>IFacade</code> implementation.
     *
     * In PureMVC, the <code>Facade</code> class assumes these responsibilities:
     *
     * <UL>
     * <LI>Initializing the <code>Model</code>, <code>View</code> and <code>Controller</code>
     * singletons.
     * <LI>Providing all the methods defined by the <code>IModel</code>, <code>IView</code>, &
     * <code>IController</code> interfaces.
     * <LI>Providing the ability to override the specific <code>Model</code>, <code>View</code> and
     * <code>Controller</code> multitons created.
     * <LI>Providing a single point of contact to the application for registering
     * <code>ICommand</code>s and notifying <code>IObserver</code>s.
     *
     * This <code>Facade</code> implementation is a multiton instance and cannot be instantiated directly,
     * but instead calls the static multiton factory method <code>Facade.getInstance( key )</code>.
     */
    var Facade = (function () {
        /**
         * Constructs a <code>Controller</code> instance.
         *
         * This <code>IFacade</code> implementation is a multiton, so you should not call the
         * constructor directly, but instead call the static multiton factory method
         * <code>Facade.getInstance( key )</code>.
         *
         *
         * @param key
         *		Multiton key for this instance of <code>Facade</code>
         *
         * @throws Error
         *		Throws an error if an instance for this multiton key has already been constructed.
         */
        function Facade(key) {
            /**
             * Local reference to the <code>Model</code> multiton.
             *
             * @protected
             */
            this.model = null;
            /**
             * Local reference to the <code>View</code> multiton.
             *
             * @protected
             */
            this.view = null;
            /**
             * Local reference to the <code>Controller</code> multiton.
             *
             * @protected
             */
            this.controller = null;
            /**
             * The multiton Key for this Core.
             *
             * @protected
             */
            this.multitonKey = null;
            if (Facade.instanceMap[key])
                throw Error(Facade.MULTITON_MSG);
            this.initializeNotifier(key);
            Facade.instanceMap[key] = this;
            this.initializeFacade();
        }
        /**
         * Called automatically by the constructor.
         * Initialize the singleton <code>Facade</code> instance.
         *
         * Override in your subclass to do any subclass specific initializations. Be sure to
         * extend the <code>Facade</code> with the methods and properties on your implementation
         * and call <code>Facade.initializeFacade()</code>.
         *
         * @protected
         */
        Facade.prototype.initializeFacade = function () {
            this.initializeModel();
            this.initializeController();
            this.initializeView();
        };
        /**
         * Initialize the <code>Model</code>.
         *
         * Called by the <code>initializeFacade</code> method. Override this method in your
         * subclass of <code>Facade</code> if one or both of the following are true:
         *
         * <UL>
         * <LI> You wish to initialize a different <code>IModel</code>.
         * <LI> You have <code>Proxy</code>s to register with the <code>Model</code> that do not
         * retrieve a reference to the <code>Facade</code> at construction time.
         *
         * If you don't want to initialize a different <code>IModel</code>, call
         * <code>super.initializeModel()</code> at the beginning of your method, then register
         * <code>Proxy</code>s.
         *
         * Note: This method is <i>rarely</i> overridden; in practice you are more likely to use a
         * <code>Command</code> to create and register <code>Proxy</code>s with the
         * <code>Model</code>, since <code>Proxy</code>s with mutable data will likely need to send
         * <code>INotification</code>s and thus will likely want to fetch a reference to the
         * <code>Facade</code> during their construction.
         *
         * @protected
         */
        Facade.prototype.initializeModel = function () {
            if (!this.model)
                this.model = puremvc.Model.getInstance(this.multitonKey);
        };
        /**
         * Initialize the <code>Controller</code>.
         *
         * Called by the <code>initializeFacade</code> method. Override this method in your
         * subclass of <code>Facade</code> if one or both of the following are true:
         *
         * <UL>
         * <LI>You wish to initialize a different <code>IController</code>.
         * <LI>You have <code>ICommand</code>s to register with the <code>Controller</code> at
         * startup.
         *
         * If you don't want to initialize a different <code>IController</code>, call
         * <code>super.initializeController()</code> at the beginning of your method, then register
         * <code>Command</code>s.
         *
         * @protected
         */
        Facade.prototype.initializeController = function () {
            if (!this.controller)
                this.controller = puremvc.Controller.getInstance(this.multitonKey);
        };
        /**
         * Initialize the <code>View</code>.
         *
         * Called by the <code>initializeFacade</code> method. Override this method in your
         * subclass of <code>Facade</code> if one or both of the following are true:
         * <UL>
         * <LI> You wish to initialize a different <code>IView</code>.
         * <LI> You have <code>Observers</code> to register with the <code>View</code>
         *
         * If you don't want to initialize a different <code>IView</code>, call
         * <code>super.initializeView()</code> at the beginning of your method, then register
         * <code>IMediator</code> instances.
         *
         * Note: This method is <i>rarely</i> overridden; in practice you are more likely to use a
         * <code>Command</code> to create and register <code>Mediator</code>s with the
         * <code>View</code>, since <code>IMediator</code> instances will need to send
         * <code>INotification</code>s and thus will likely want to fetch a reference to the
         * <code>Facade</code> during their construction.
         *
         * @protected
         */
        Facade.prototype.initializeView = function () {
            if (!this.view)
                this.view = puremvc.View.getInstance(this.multitonKey);
        };
        /**
         * Register an <code>ICommand</code> with the <code>IController</code> associating it to a
         * <code>INotification</code> name.
         *
         * @param notificationName
         *		The name of the <code>INotification</code> to associate the <code>ICommand</code>
         *		with.
         
         * @param commandClassRef
         * 		A reference to the constructor of the <code>ICommand</code>.
         */
        Facade.prototype.registerCommand = function (notificationName, commandClassRef) {
            this.controller.registerCommand(notificationName, commandClassRef);
        };
        /**
         * Remove a previously registered <code>ICommand</code> to <code>INotification</code>
         * mapping from the <code>Controller</code>.
         *
         * @param notificationName
         *		The name of the <code>INotification</code> to remove the <code>ICommand</code>
         *		mapping for.
         */
        Facade.prototype.removeCommand = function (notificationName) {
            this.controller.removeCommand(notificationName);
        };
        /**
         * Check if an <code>ICommand</code> is registered for a given <code>Notification</code>.
         *
         * @param notificationName
         * 		The name of the <code>INotification</code> to verify for the existence of an
         * 		<code>ICommand</code> mapping for.
         *
         * @return
         * 		A <code>Command</code> is currently registered for the given
         *		<code>notificationName</code>.
         */
        Facade.prototype.hasCommand = function (notificationName) {
            return this.controller.hasCommand(notificationName);
        };
        /**
         * Register an <code>IProxy</code> with the <code>Model</code> by name.
         *
         * @param proxy
         *		The <code>IProxy</code> to be registered with the <code>Model</code>.
         */
        Facade.prototype.registerProxy = function (proxy) {
            this.model.registerProxy(proxy);
        };
        /**
         * Retrieve an <code>IProxy</code> from the <code>Model</code> by name.
         *
         * @param proxyName
         * 		The name of the <code>IProxy</code> to be retrieved.
         *
         * @return
         * 		The <code>IProxy</code> previously registered with the given
         *		<code>proxyName</code>.
         */
        Facade.prototype.retrieveProxy = function (proxyName) {
            return this.model.retrieveProxy(proxyName);
        };
        /**
         * Remove an <code>IProxy</code> from the <code>Model</code> by name.
         *
         * @param proxyName
         *		The <code>IProxy</code> to remove from the <code>Model</code>.
         *
         * @return
         *		The <code>IProxy</code> that was removed from the <code>Model</code>
         */
        Facade.prototype.removeProxy = function (proxyName) {
            var proxy;
            if (this.model)
                proxy = this.model.removeProxy(proxyName);
            return proxy;
        };
        /**
         * Check if a <code>Proxy</code> is registered.
         *
         * @param proxyName
         * 		The <code>IProxy</code> to verify the existence of a registration with the
         *		<code>IModel</code>.
         *
         * @return
         * 		A <code>Proxy</code> is currently registered with the given	<code>proxyName</code>.
         */
        Facade.prototype.hasProxy = function (proxyName) {
            return this.model.hasProxy(proxyName);
        };
        /**
         * Register a <code>IMediator</code> with the <code>IView</code>.
         *
         * @param mediator
         *		A reference to the <code>IMediator</code>.
         */
        Facade.prototype.registerMediator = function (mediator) {
            if (this.view)
                this.view.registerMediator(mediator);
        };
        /**
         * Retrieve an <code>IMediator</code> from the <code>IView</code>.
         *
         * @param mediatorName
         * 		The name of the registered <code>Mediator</code> to retrieve.
         *
         * @return
         *		The <code>IMediator</code> previously registered with the given
         *		<code>mediatorName</code>.
         */
        Facade.prototype.retrieveMediator = function (mediatorName) {
            return this.view.retrieveMediator(mediatorName);
        };
        /**
         * Remove an <code>IMediator</code> from the <code>IView</code>.
         *
         * @param mediatorName
         * 		Name of the <code>IMediator</code> to be removed.
         *
         * @return
         *		The <code>IMediator</code> that was removed from the <code>IView</code>
         */
        Facade.prototype.removeMediator = function (mediatorName) {
            var mediator;
            if (this.view)
                mediator = this.view.removeMediator(mediatorName);
            return mediator;
        };
        /**
         * Check if a <code>Mediator</code> is registered or not
         *
         * @param mediatorName
         * 		The name of the <code>IMediator</code> to verify the existence of a registration
         *		for.
         *
         * @return
         * 		An <code>IMediator</code> is registered with the given <code>mediatorName</code>.
         */
        Facade.prototype.hasMediator = function (mediatorName) {
            return this.view.hasMediator(mediatorName);
        };
        /**
         * Notify the <code>IObserver</code>s for a particular <code>INotification</code>.
         *
         * This method is left public mostly for backward compatibility, and to allow you to
         * send custom notification classes using the <code>Facade</code>.
         *
         *
         * Usually you should just call <code>sendNotification</code> and pass the parameters,
         * never having to construct the <code>INotification</code> yourself.
         *
         * @param notification
         * 		The <code>INotification</code> to have the <code>IView</code> notify
         *		<code>IObserver</code>s	of.
         */
        Facade.prototype.notifyObservers = function (notification) {
            if (this.view)
                this.view.notifyObservers(notification);
        };
        /**
         * Create and send an <code>INotification</code>.
         *
         * Keeps us from having to construct new notification instances in our implementation code.
         *
         * @param name
         *		The name of the notification to send.
         *
         * @param body
         *		The body of the notification to send.
         *
         * @param type
         *		The type of the notification to send.
         */
        Facade.prototype.sendNotification = function (name, body, type) {
            if (body === void 0) { body = null; }
            if (type === void 0) { type = null; }
            this.notifyObservers(new puremvc.Notification(name, body, type));
        };
        /**
         * Set the multiton key for this <code>Facade</code> instance.
         *
         * Not called directly, but instead from the constructor when
         * <code>Facade.getInstance(key)</code> is invoked.
         *
         * @param key
         *		The multiton key for this <code>Facade</code> instance to initialize the
         *		<code>Notifier</code> with.
         */
        Facade.prototype.initializeNotifier = function (key) {
            this.multitonKey = key;
        };
        /**
         * <code>Facade</code> multiton factory method.
         *
         * @param key
         *		The multiton key of the instance of <code>Facade</code> to create or retrieve.
         *
         * @return
         * 		The singleton instance of <code>Facade</code>.
         */
        Facade.getInstance = function (key) {
            if (!Facade.instanceMap[key])
                Facade.instanceMap[key] = new Facade(key);
            return Facade.instanceMap[key];
        };
        /**
         * Check if a core is registered or not.
         *
         * @param key
         *		The multiton key for the Core in question.
         *
         * @return
         *		The core is registered with the given <code>key</code>.
         */
        Facade.hasCore = function (key) {
            return Facade.instanceMap[key] ? true : false;
        };
        /**
         * Remove a core.
         *
         * Remove the <code>Model</code>, <code>View</code>, <code>Controller</code> and
         * <code>Facade</code> instances for the given key.
         *
         * @param key
         *		Key identifier of the core to remove.
         */
        Facade.removeCore = function (key) {
            if (!Facade.instanceMap[key])
                return;
            puremvc.Model.removeModel(key);
            puremvc.View.removeView(key);
            puremvc.Controller.removeController(key);
            delete Facade.instanceMap[key];
        };
        /**
         * @constant
         * @protected
         */
        Facade.MULTITON_MSG = "Facade instance for this multiton key already constructed!";
        /**
         * <code>Facade</code> singleton instance map.
         *
         * @protected
         */
        Facade.instanceMap = {};
        return Facade;
    }());
    puremvc.Facade = Facade;
    __reflect(Facade.prototype, "puremvc.Facade", ["puremvc.IFacade", "puremvc.INotifier"]);
})(puremvc || (puremvc = {}));
