class AppStartProxy extends puremvc.Proxy {

	private appStartEntity:AppStartEntity;

	public static proxyName:string = "AppStartProxy";

	public constructor() {
		super();
		this.appStartEntity = new AppStartEntity();
	}

	public getProxyName():string
	{
		return this.proxyName;
	}	

	public StartedApp():void{
		this.appStartEntity.AppStarted = true;
		super.sendNotification(PurMVCEvents.AppStarted);
	}

}