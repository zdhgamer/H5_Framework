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
		console.log("当前舞台子组件个数："+UIManager.getInstane().MainStage.numChildren);
		console.log(window.location.href);
		if(window.location.href.indexOf("code")>0){
			console.log(window.location.href);
			let params:string[] = window.location.href.split("&");
			for(let i=0;i<params.length;i++){
				if(params[i].indexOf("code")>0){
					let code :string[] = params[i].split("=");
					HttpClientManager.getInstance().sendHttpByGet("http://47.106.180.129/getUserInfo?code="+code[1],(data)=>{
						console.log("返回的微信用户数据是："+data);
					})
				}
			}
		}
		else{
			this.mainView.Button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTestBtnClick.bind(this),this);
		}
	}

	/**
	 * 测试按钮点击方法
	 */
	public onTestBtnClick():void{
		console.log(this);
		this.tips = new Tips();
		UIManager.getInstane().addSubView(this.tips);
		console.log("当前舞台子组件个数："+UIManager.getInstane().MainStage.numChildren);
		this.autho();
	}

	/**
	 * 微信授权
	 */
	private autho():void{
		let appid = "wx20b7d401030b8032";
		let appsecret="abf14af264d2c32216c881b73b687721";
		let redirect_uri= decodeURI("http://47.106.180.129/static/index.html");
		let scope="snsapi_userinfo";
		let url="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type=code&scope="+scope+"&state=STATE#wechat_redirect";
		console.log(url);
		window.location.href = url;
	}


}