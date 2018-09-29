class AppStartMediator extends puremvc.Mediator{

	public static NAME:string = 'AppStartMediator';

	private mainView:MainView;

	private tips:Tips;

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
				this.loadMainView();
				
			break;
		}
	}

	/**
	 * 加载一个测试界面
	 */
	public loadMainView():void{
		this.mainView = new MainView();
		UIManager.getInstane().addSubView(this.mainView);
		this.mainView.Button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTestBtnClick,this);
	}

	/**
	 * 测试按钮点击方法
	 */
	public onTestBtnClick():void{
		console.log(this);
		this.tips = new Tips();
		UIManager.getInstane().addSubView(this.tips);
	}


}