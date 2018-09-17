class AppStartCommand extends puremvc.SimpleCommand {
	
	public constructor() {
		super();
	}

	public execute( notification:puremvc.INotification ):void
	{
		super.execute(notification);
		let appStartProxy = <AppStartProxy>super.facade().retrieveProxy(AppStartProxy.NAME);
		appStartProxy.StartedApp();
	}

}