class HttpClient {

	/**
	 * get请求的回调
	 */
	public getCallBack: (result: boolean, data: string) => void;

	/**
	 * post请求的回调
	 */
	public postCallBack: (result: boolean, data: string) => void;

	public constructor() {
	}

	/**
	 * 发送一个http的get请求
	 */
	public sendHttpByGet(url: string, callBack: (result: boolean, data: string) => void): void {
		this.getCallBack = callBack;
		let request = new egret.HttpRequest();
		request.withCredentials =true;
		request.responseType = egret.HttpResponseType.TEXT;
		request.open(url, egret.HttpMethod.GET);
		request.setRequestHeader("Content-Type", "application/json");
		request.send();
		request.addEventListener(egret.Event.COMPLETE, this.onHttpGetComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onHttpGetIOError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, this.onHttpGetProgress, this);
	}

	/**
	 * http的get请求完成
	 */
	private onHttpGetComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("收到http的get请求返回的数据：" + request.response);
		if (this.getCallBack) {
			this.getCallBack(true, request.response);
		}
	}

	/**
	 * http的get请求发送错误
	 */
	private onHttpGetIOError(): void {
		console.log("发送http的get请求返回错误");
		if (this.getCallBack) {
			this.getCallBack(false, "");
		}
	}

	/**
	 * http的get请求进度
	 */
	private onHttpGetProgress(): void {

	}

	/**
	 * 发送一个http的post请求
	 */
	public sendHttpPostForm(url: string, callBack: (result: boolean, data: string) => void, data?: HttpPostFormData): void {
		this.postCallBack = callBack;
		let request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		request.withCredentials =true;
		request.open(url, egret.HttpMethod.POST);
		request.setRequestHeader("Content-Type", "application/json");
		if(data){
			request.send(data.getData());
		}
		else{
			request.send();
		}

		request.addEventListener(egret.Event.COMPLETE, this.onHttpPostComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onHttpPostIOError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, this.onHttpPostProgress, this);
	}

	/**
	 * http的post请求完成
	 */
	private onHttpPostComplete(event: egret.Event): void {
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("收到http的post请求返回数据：", request.response);
		if (this.postCallBack) {
			this.postCallBack(true, request.response);
		}
	}

	/**
	 * http的post请求发送错误
	 */
	private onHttpPostIOError(): void {
		console.log("发送http的post请求返回错误");
		if (this.postCallBack) {
			this.postCallBack(true, "");
		}
	}

	/**
	 * http的post请求进度
	 */
	private onHttpPostProgress(): void {

	}

}