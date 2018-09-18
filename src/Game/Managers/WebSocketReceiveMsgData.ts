class WebSocketReceiveMsgData {

	private msgId:number;

	private msgData:Uint8Array;

	public get MsgId():number{
		return this.msgId;
	}

	public set MsgId(value:number){
		this.msgId = value;
	}

	public get MsgData():Uint8Array{
		return this.msgData;
	}

	public set MsgData(value:Uint8Array){
		this.msgData = value;
	}

	public constructor() {
	}
}