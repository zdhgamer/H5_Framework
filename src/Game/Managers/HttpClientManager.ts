class HttpClientManager {

	private static instance: HttpClientManager;

	/**
	 * httplient
	 */
	private httpClient: HttpClient;

	public constructor() {
		if (!this.httpClient) {
			this.httpClient = new HttpClient();
		}
	}

	public static getInstance(): HttpClientManager {
		if (!this.instance) {
			this.instance = new HttpClientManager();
		}
		return this.instance;
	}

	/**
	 * 发送一个http的get请求
	 */
	public sendHttpByGet(url: string, callBack: (result: boolean, data: string) => void): void {
		this.httpClient.sendHttpByGet(url, callBack);
	}

	/**
	 * 提交一个表单的Post
	 */
	public sendHttpPostForm(url: string, callBack: (result: boolean, data: string) => void, data: HttpPostFormData): void {
		this.httpClient.sendHttpPostForm(url, callBack, data);
	}

}