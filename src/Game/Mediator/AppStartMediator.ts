class AppStartMediator extends puremvc.Mediator{

	public static NAME:string = 'AppStartMediator';

	public constructor() {
		super();
	}

	public listNotificationInterests():string[]
	{
		let result = new Array<string>();
		result.push(PurMVCEvents.AppStarted);
		return result;
	}

	public handleNotification( notification:puremvc.INotification ):void
	{
		super.handleNotification(notification);
		switch(notification.getName()){
			case PurMVCEvents.AppStarted:
				console.log("框架启动完成")
			break;
		}
	}
}