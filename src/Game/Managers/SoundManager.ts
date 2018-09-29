class SoundManager {

	private static instance: SoundManager;

	/**
	 * 背景音乐
	 */
	private bgSound: egret.Sound;

	/**
	 * 测试
	 */
	private testAuto:egret.Sound;

	/**
	 * 背景音乐的播放管道
	 */
	private bgSoundChan: egret.SoundChannel;

	public constructor() {
		this.bgSound = RES.getRes("Music_mp3");
		this.testAuto = RES.getRes("Login_01_mp3");
	}

	public static getInstance(): SoundManager {
		if (!this.instance) {
			this.instance = new SoundManager();
		}
		return this.instance;
	}

	/**
	 * 设置背景音乐是否播放
	 */
	public set IsMusic(value) {
		if (!value) {
			egret.localStorage.setItem("ismusic", "0");
			this.stopBgSound();
		} else {
			egret.localStorage.setItem("ismusic", "1");
			this.playBgSound();
		}
	}

	/**
	 * 背景音乐是否可以播放
	 */
	public get IsMusic(): boolean {
		var b = egret.localStorage.getItem('ismusic');
		if (b == null || b == "") {
			return true;
		} else {
			return b == "1";
		}
	}


    /**
	 * 设置音效是否可以播放
	 */
	public set IsSound(value) {
		if (!value) {
			egret.localStorage.setItem("isSound", "0");
		} else {
			egret.localStorage.setItem("isSound", "1");
		}
	}

	/**
	 * 是否可以播放音乐
	 */
	public get IsSound(): boolean {
		var b = egret.localStorage.getItem('isSound');
		if (b == null || b == "") {
			return true;
		} else {
			return b == "1";
		}
	}

	/**
	 * 播放背景音乐
	 */
	public playBgSound(): void {
		if (this.IsMusic) {
			console.log(this.bgSound);
			this.bgSoundChan = this.bgSound.play(0, 0);
		}
	}

	/**
	 * 停止播放背景音乐
	 */
	public stopBgSound(): void {
		if (this.bgSoundChan != null) {
			this.bgSoundChan.stop();
		}
	}

	/**
	 * 播放测试
	 */
	public playTest():void{
		this.testAuto.play();
	}

}