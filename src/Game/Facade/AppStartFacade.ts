class AppStartFacade extends puremvc.Facade {

	public static Name = "AppStartFacade";

	private static instance:AppStartFacade;

	constructor( key )
	{
		super(key);
	}

	public static getInstance( key:string ):AppStartFacade
	{
		if( !puremvc.Facade.instanceMap[ key ] )
			puremvc.Facade.instanceMap[ key ] = new AppStartFacade( key );
		return puremvc.Facade.instanceMap[ key ];
	}

	public initializeModel():void
	{
		super.initializeModel();
		super.registerProxy(new AppStartProxy());
	}

	public initializeController():void{
		super.initializeController();
		super.registerCommand(PurMVCEvents.AppStart,AppStartCommand);
	}

	public initializeView():void{
		super.initializeView();
		super.registerMediator(new AppStartMediator())
	}

	public StartApp(mainStage:Main):void{
		super.sendNotification(PurMVCEvents.AppStart,mainStage);
	}

}