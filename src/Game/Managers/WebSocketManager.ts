class WebSocketManager {

	private socket:egret.WebSocket = new egret.WebSocket();

	private static instance:WebSocketManager;

	public static getInstance():WebSocketManager{
		if(!this.instance){
			this.instance = new WebSocketManager();
		}
		return this.instance;
	}

	public constructor() {
		if(!this.socket){
			this.socket = new egret.WebSocket();
		}
		this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMsg,this);
		this.socket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
		this.socket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
	}

	private onSocketOpen():void{

	}

	private onSocketClose():void{

	}

	private onReceiveMsg(e:egret.Event):void{

	}

	public closeConnect():void{
		this.socket.close();
	}

}