class AppStartCommand extends puremvc.SimpleCommand {

	public constructor() {
		super();
	}

	public execute(notification: puremvc.INotification): void {
		super.execute(notification);
		this.initWebSocket();
		this.initSound();
		let appStartProxy = <AppStartProxy>super.facade().retrieveProxy(AppStartProxy.NAME);
		let mainStage = <Main>notification.getBody();
		UIManager.getInstane().MainStage = mainStage;
		appStartProxy.StartedApp();
	}

	/**
	 * 初始化网络
	 */
	public initWebSocket(): void {
		WebSocketManager.getInstance().onSocketOpenCall = this.onSocketOpen.bind(this);
		WebSocketManager.getInstance().onSocketCloseCall = this.onSocketClose.bind(this);
		WebSocketManager.getInstance().onSocketIOErrorCall = this.onSocketIOError.bind(this);
		WebSocketManager.getInstance().connectToServer();
	}

	/**
	 * 初始化音乐和音效
	 */
	public initSound(): void {
		SoundManager.getInstance();
		let timer = new egret.Timer(5000,1);
		timer.addEventListener(egret.TimerEvent.TIMER,this.onSoundTimerCall,this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onSoundTimerComplete,this);
        //开始计时
        timer.start();
	}

	/**
	 * 音乐定时器触发
	 */
	private onSoundTimerCall():void{
		SoundManager.getInstance().playTest();
	}

	/**
	 *  音乐定时器结束
	 */
	private onSoundTimerComplete():void{

	}

	/**
	 * 网络连接成功
	 */
	public onSocketOpen(): void {
		console.log(this);
		let temp = new awesomepackage.ZZ();
		temp.aa = "zdh";
		let msgWrite = awesomepackage.ZZ.encode(temp);
		let msgData = msgWrite.finish();
		console.log(new Date().getTime())
		WebSocketManager.getInstance().sendMsg(SocketEvents.TestMID, msgData,this.onReceiveTest);
	}

	/**
	 * 与服务器连接关闭
	 */
	public onSocketClose(): void {

	}

	/**
	 * 发生IO错误
	 */
	public onSocketIOError(): void {

	}

	/**
	 * 接收到测试消息
	 */
	public onReceiveTest(msg: WebSocketReceiveMsgData): void {
		console.log(new Date().getTime())
		console.log("收到服务器的消息"+msg.MsgData);
		let data = awesomepackage.ZZ.decode(msg.MsgData);
		console.log("解析出来，服务器返回的消息是："+data.aa);
	}

}