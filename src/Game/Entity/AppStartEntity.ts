class AppStartEntity {

	private appStarted:boolean = false;

	public constructor() {
	}

	public get AppStarted():boolean{
		return this.appStarted;
	}

	public set AppStarted(value:boolean){
		this.appStarted = value;
	}

}