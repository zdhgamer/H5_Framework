class MainView extends eui.Component implements  eui.UIComponent {

	public Button:eui.Button;
	public Button0:eui.Button;
	public Button1:eui.Button;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.left = 0;
		this.right = 0;
		this.top = 0;
		this.bottom = 0;
	}


	
}