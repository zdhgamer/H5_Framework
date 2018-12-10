var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        this.bgSound = RES.getRes("Music_mp3");
        this.testAuto = RES.getRes("Login_01_mp3");
    }
    SoundManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new SoundManager();
        }
        return this.instance;
    };
    Object.defineProperty(SoundManager.prototype, "IsMusic", {
        /**
         * 背景音乐是否可以播放
         */
        get: function () {
            var b = egret.localStorage.getItem('ismusic');
            if (b == null || b == "") {
                return true;
            }
            else {
                return b == "1";
            }
        },
        /**
         * 设置背景音乐是否播放
         */
        set: function (value) {
            if (!value) {
                egret.localStorage.setItem("ismusic", "0");
                this.stopBgSound();
            }
            else {
                egret.localStorage.setItem("ismusic", "1");
                this.playBgSound();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "IsSound", {
        /**
         * 是否可以播放音乐
         */
        get: function () {
            var b = egret.localStorage.getItem('isSound');
            if (b == null || b == "") {
                return true;
            }
            else {
                return b == "1";
            }
        },
        /**
         * 设置音效是否可以播放
         */
        set: function (value) {
            if (!value) {
                egret.localStorage.setItem("isSound", "0");
            }
            else {
                egret.localStorage.setItem("isSound", "1");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 播放背景音乐
     */
    SoundManager.prototype.playBgSound = function () {
        if (this.IsMusic) {
            console.log(this.bgSound);
            this.bgSoundChan = this.bgSound.play(0, 0);
        }
    };
    /**
     * 停止播放背景音乐
     */
    SoundManager.prototype.stopBgSound = function () {
        if (this.bgSoundChan != null) {
            this.bgSoundChan.stop();
        }
    };
    /**
     * 播放测试
     */
    SoundManager.prototype.playTest = function () {
        this.testAuto.play();
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
