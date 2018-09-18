class AppStartCommand extends puremvc.SimpleCommand {
	
	public constructor() {
		super();
	}

	public execute( notification:puremvc.INotification ):void
	{
		super.execute(notification);
		this.initWebSocket();
		let appStartProxy = <AppStartProxy>super.facade().retrieveProxy(AppStartProxy.NAME);
		appStartProxy.StartedApp();
	}

	/**
	 * 初始化网络
	 */
	public initWebSocket():void{
		WebSocketManager.getInstance().onSocketOpenCall = this.onSocketOpen;
		WebSocketManager.getInstance().onSocketCloseCall = this.onSocketClose;
		WebSocketManager.getInstance().onSocketIOErrorCall = this.onSocketIOError;
		WebSocketManager.getInstance().connectToServer();
		this.registerTest();
	}

	/**
	 * 测试注册监听
	 */
	private registerTest():void{
		WebSocketManager.getInstance().registerMsgFunction(SocketEvents.TestMID,this.onReceiveTest);
	}

	/**
	 * 网络连接成功
	 */
	public onSocketOpen():void{		
		let temp = new awesomepackage.ZZ();
		temp.aa = "zdh";
		let msgWrite = awesomepackage.ZZ.encode(temp);
		let msgData = msgWrite.finish();
		WebSocketManager.getInstance().sendMsg(SocketEvents.TestMID,msgData);
	}

	/**
	 * 与服务器连接关闭
	 */
	public onSocketClose():void{

	}

	/**
	 * 发生IO错误
	 */
	public onSocketIOError():void{

	}

	/**
	 * 接收到测试消息
	 */
	public onReceiveTest(msg:WebSocketReceiveMsgData):void{
		console.log("收到服务器的消息");
	}

}