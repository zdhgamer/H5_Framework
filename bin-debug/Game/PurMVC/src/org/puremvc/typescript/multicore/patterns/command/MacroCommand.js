///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/ICommand.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotifier.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/interfaces/INotification.ts'/>
///<reference path='../../../../../../org/puremvc/typescript/multicore/patterns/observer/Notifier.ts'/>
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
var puremvc;
(function (puremvc) {
    "use strict";
    /**
     * A base <code>ICommand</code> implementation that executes other <code>ICommand</code>s.
     *
     * A <code>MacroCommand</code> maintains an list of <code>ICommand</code> constructor references
     * called <i>SubCommand</i>s.
     *
     * When <code>execute</code> is called, the <code>MacroCommand</code> instantiates and calls
     * <code>execute</code> on each of its <i>SubCommands</i> turn. Each <i>SubCommand</i> will be
     * passed a reference to the original <code>INotification</code> that was passed to the
     * <code>MacroCommand</code>'s <code>execute</code> method.
     *
     * Unlike <code>SimpleCommand</code>, your subclass should not override <code>execute</code>,
     * but instead, should override the <code>initializeMacroCommand</code> method, calling
     * <code>addSubCommand</code> once for each <i>SubCommand</i> to be executed.
     */
    var MacroCommand = (function (_super) {
        __extends(MacroCommand, _super);
        /**
         * Constructs a <code>MacroCommand</code> instance.
         *
         * You should not need to define a constructor in your subclasses, instead, override the
         * <code>initializeMacroCommand</code> method.
         *
         * If your subclass does define a constructor, be  sure to call <code>super()</code>.
         */
        function MacroCommand() {
            var _this = _super.call(this) || this;
            /**
             * An array of <code>ICommand</code>s.
             *
             * @protected
             */
            _this.subCommands = null;
            _this.subCommands = new Array();
            _this.initializeMacroCommand();
            return _this;
        }
        /**
         * Initialize the <code>MacroCommand</code>.
         *
         * In your subclass, override this method to  initialize the <code>MacroCommand</code>'s
         * <i>subCommand</i> list with <code>ICommand</code> class references like this:
         *
         * <pre>
         *		// Initialize MyMacroCommand
         *		initializeMacroCommand():void
         *		{
         *			this.addSubCommand( FirstCommand );
         *			this.addSubCommand( SecondCommand );
         *			this.addSubCommand( ThirdCommand );
         *		}
         * </pre>
         *
         * Note that <i>subCommand</i>s may be any <code>ICommand</code> implementor so
         * <code>MacroCommand</code>s or <code>SimpleCommand</code>s are both acceptable.
         *
         * @protected
         */
        MacroCommand.prototype.initializeMacroCommand = function () {
        };
        /**
         * Add an entry to the <i>subCommands</i> list.
         *
         * The <i>subCommands</i> will be called in First In/First Out (FIFO) order.
         *
         * @param commandClassRef
         *		A reference to the constructor of the <code>ICommand</code>.
         *
         * @protected
         */
        MacroCommand.prototype.addSubCommand = function (commandClassRef) {
            this.subCommands.push(commandClassRef);
        };
        /**
         * Execute this <code>MacroCommand</code>'s <i>SubCommands</i>.
         *
         * The <i>SubCommands</i> will be called in First In/First Out (FIFO)
         * order.
         *
         * @param notification
         *		The <code>INotification</code> object to be passed to each <i>SubCommand</i> of
         *		the list.
         *
         * @final
         */
        MacroCommand.prototype.execute = function (notification) {
            var subCommands = this.subCommands.slice(0);
            var len = this.subCommands.length;
            for (var i = 0; i < len; i++) {
                /*
                 * Typed any here instead of <code>Function</code> ( won't compile if set to Function
                 * because today the compiler consider that <code>Function</code> is not newable and
                 * doesn't have a <code>Class</code> type)
                 */
                var commandClassRef = subCommands[i];
                var commandInstance = new commandClassRef();
                commandInstance.initializeNotifier(this.multitonKey);
                commandInstance.execute(notification);
            }
            this.subCommands.splice(0);
        };
        return MacroCommand;
    }(puremvc.Notifier));
    puremvc.MacroCommand = MacroCommand;
    __reflect(MacroCommand.prototype, "puremvc.MacroCommand", ["puremvc.ICommand"]);
})(puremvc || (puremvc = {}));
//# sourceMappingURL=MacroCommand.js.map