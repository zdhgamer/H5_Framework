class WebSocketManager {

	private socket: egret.WebSocket = new egret.WebSocket();

	private static instance: WebSocketManager;

	private msgFunctionMap = {};

	public onSocketOpenCall: () => void;

	public onSocketCloseCall: () => void;

	public onSocketIOErrorCall: () => void;

	public static getInstance(): WebSocketManager {
		if (!this.instance) {
			this.instance = new WebSocketManager();
		}
		return this.instance;
	}

	public constructor() {
		if (!this.socket) {
			this.socket = new egret.WebSocket();
		}
		this.socket.type = egret.WebSocket.TYPE_BINARY;
		this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMsg, this);
		this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
		this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
		this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
	}

	/**
	 * 连接远程服务器
	 */
	public connectToServer(): void {
		this.socket.connectByUrl(AppConst.webSocketServerUrl);
	}

	/**
	 * 服务器连接成功回调
	 */
	private onSocketOpen(): void {
		console.log("服务器连接成功");
		if (this.onSocketOpenCall) {
			this.onSocketOpenCall();
		}
	}

	/**
	 * 服务器断开连接回调
	 */
	private onSocketClose(): void {
		console.log("与服务器断开连接");
		if (this.onSocketCloseCall) {
			this.onSocketCloseCall();
		}
	}

	/**
	 * 发生IO错误回调
	 */
	private onSocketIOError(): void {
		console.log("产生io错误");
		if (this.onSocketIOErrorCall) {
			this.onSocketIOErrorCall();
		}
	}

	/**
	 * 收到消息回调
	 */
	private onReceiveMsg(e: egret.Event): void {
		let bytes: egret.ByteArray = new egret.ByteArray();
		this.socket.readBytes(bytes);
		let msgId = bytes.readInt();
		let msgValue = new Uint8Array(bytes.buffer.slice(4,bytes.bytesAvailable+4));
		let msgData = new WebSocketReceiveMsgData();
		msgData.MsgId = msgId;
		msgData.MsgData = msgValue;
		this.dispatchMsg(msgData);
	}

	/**
	 * 主动断开连接
	 */
	public closeConnect(): void {
		this.socket.close();

	}

	/**
	 * 注册消息监听回调
	 */
	public registerMsgFunction(msgId: number, callBack: (msg: WebSocketReceiveMsgData) => void): void {
		if (!this.msgFunctionMap[msgId]) {
			this.msgFunctionMap[msgId] = [];
			this.msgFunctionMap[msgId].push(callBack);
		}
		else {
			let funList = this.msgFunctionMap[msgId];
			let index = funList.indexOf(callBack);
			if (index < 0) {
				funList.push(callBack);
			}
		}
	}

	/**
	 * 清除该msgId下面的所有
	 */
	public removeAllMsgFunction(msgId: number): void {
		if (!this.msgFunctionMap[msgId]) {
			this.msgFunctionMap[msgId] = null;
		}
	}

	/**
	 * 移除一个消息监听
	 */
	public removeMsgFunction(msgId: number, callBack: (msg: WebSocketReceiveMsgData) => void): void {
		if (this.msgFunctionMap[msgId]) {
			let index = this.msgFunctionMap[msgId].indexOf(callBack);
			if (this.msgFunctionMap[msgId].length > 0 && index >= 0) {
				this.msgFunctionMap[msgId].splice(index, index + 1);
				if (this.msgFunctionMap[msgId].length <= 0) {
					this.msgFunctionMap[msgId] = null;
				}
			}
		}
	}

	/**
	 * 分发收到的消息
	 */
	public dispatchMsg(msgData:WebSocketReceiveMsgData):void{
		let msgId = msgData.MsgId;
		let temp = this.msgFunctionMap[msgId];
		if(this.msgFunctionMap[msgId]){
			for(let i=0;i<this.msgFunctionMap[msgId].length;i++){
				if(this.msgFunctionMap[msgId][i]){
					this.msgFunctionMap[msgId][i](msgData);
				}
			}
		}
	}

	/**
	 * 主动发送消息给服务器
	 */
	public sendMsg(msgId: number, msg: Uint8Array, callBack?: (msg: WebSocketReceiveMsgData) => void): void {
		if (callBack) {
			this.registerMsgFunction(msgId, callBack);
		}
		let msgData = new egret.ByteArray(msg);		
		let msgArray = new egret.ByteArray();
		msgArray.writeInt(msgId);
		msgArray.writeBytes(msgData);
		console.log(msgArray.bytes)
		this.socket.writeBytes(msgArray,0,msgArray.bytesAvailable);
	}

}