class HttpPostFormData {

	private data: string;

	public constructor() {
		this.data = "";
	}

	public setParameter(key: string, value: string): void {
		if (this.data == "") {
			this.data += key + "=" + value;
		}
		else {
			this.data += "&" + key + "=" + value;
		}
	}

	public getData(): string {
		return this.data;
	}
}


class HttpGetFormData {

	private data: string;

	public constructor() {
		this.data = "?";
	}

	public setParameter(key: string, value: string): void {
		if (this.data == "?") {
			this.data += key + "=" + value;
		}
		else {
			this.data += "&" + key + "=" + value;
		}
	}

	public getData(): string {
		return this.data;
	}
}