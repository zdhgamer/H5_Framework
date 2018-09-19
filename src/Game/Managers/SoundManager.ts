class SoundManager {

	private static instance:SoundManager;

	/**
	 * 背景音乐
	 */
	private bgSound:egret.Sound;

	/**
	 * 背景音乐的播放管道
	 */
	private bgSoundChan:egret.SoundChannel;

	public constructor() {
        this.bgSound = new egret.Sound();
        this.bgSound.load("resource/assets/sound/Music.mp3");
	}

	public static getInstance():SoundManager{
		if(!this.instance){
			this.instance = new SoundManager();
		}
		return this.instance;
	}

}