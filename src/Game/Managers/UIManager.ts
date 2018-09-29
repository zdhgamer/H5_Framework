class UIManager {

	private static instance :UIManager;
	/**
	 * 主舞台
	 */
	private mainStage:Main;

	public constructor() {
	}

	public static getInstane():UIManager{
		if(!this.instance){
			this.instance = new UIManager();
		}
		return this.instance;
	}

	public get MainStage():Main{
		return this.mainStage;
	}

	public set MainStage(value:Main){
		this.mainStage = value;
	}

	/**
	 * 添加子界面
	 */
	public addSubView(subView:eui.Component,index?:number):void{
		this.MainStage.addSubView(subView,index);
	}

	/**
	 * 移除子界面
	 */
	public removeSubView(subView:eui.Component):void{
		this.MainStage.removeSubView(subView);
	}

}