class ResLoadingUI extends eui.Component implements eui.UIComponent, RES.PromiseTaskReporter {
	/**
	 * 加载背景
	 */
	public loading_bg: eui.Image;
	/**
	 * 加载ing
	 */
	public loading: eui.Image;
	/**
	 * 进度显示
	 */
	public progress:eui.BitmapLabel;
	/**
	 * 动画
	 */
	private loadingTween:egret.Tween;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	 protected partRemoved(partName: string, instance: any): void{
		 super.partRemoved(partName,instance);
		 egret.Tween.removeTweens(this.loading);
		 console.log("移除动画组件")
	 }

	protected childrenCreated(): void {
		super.childrenCreated();
		this.left = 0;
		this.right = 0;
		this.top = 0;
		this.bottom = 0;
		this.loadingTween = egret.Tween.get(this.loading,{loop:true,onChange:this.OnTweenChangFunc.bind(this)},)
		.to({rotation:360},3*1000);
	}

	private OnTweenChangFunc():void{
		// console.log(this);
		// console.log("当前旋转角度为："+this.loading.rotation.toString());
	}

	/**
	 * 进度回调
	 */
	public onProgress(current: number, total: number): void {
		this.progress.text =parseInt((current/total)*100+"")+"%";
		if(current>=total){
		 egret.Tween.removeTweens(this.loading);
		 console.log("移除动画组件");
		}
    }

}