var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpClient = (function () {
    function HttpClient() {
    }
    /**
     * 发送一个http的get请求
     */
    HttpClient.prototype.sendHttpByGet = function (url, callBack) {
        this.getCallBack = callBack;
        var request = new egret.HttpRequest();
        request.withCredentials = true;
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(url, egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/json");
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onHttpGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onHttpGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onHttpGetProgress, this);
    };
    /**
     * http的get请求完成
     */
    HttpClient.prototype.onHttpGetComplete = function (event) {
        var request = event.currentTarget;
        console.log("收到http的get请求返回的数据：" + request.response);
        if (this.getCallBack) {
            this.getCallBack(true, request.response);
        }
    };
    /**
     * http的get请求发送错误
     */
    HttpClient.prototype.onHttpGetIOError = function () {
        console.log("发送http的get请求返回错误");
        if (this.getCallBack) {
            this.getCallBack(false, "");
        }
    };
    /**
     * http的get请求进度
     */
    HttpClient.prototype.onHttpGetProgress = function () {
    };
    /**
     * 发送一个http的post请求
     */
    HttpClient.prototype.sendHttpPostForm = function (url, callBack, data) {
        this.postCallBack = callBack;
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.withCredentials = true;
        request.open(url, egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/json");
        if (data) {
            request.send(data.getData());
        }
        else {
            request.send();
        }
        request.addEventListener(egret.Event.COMPLETE, this.onHttpPostComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onHttpPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onHttpPostProgress, this);
    };
    /**
     * http的post请求完成
     */
    HttpClient.prototype.onHttpPostComplete = function (event) {
        var request = event.currentTarget;
        console.log("收到http的post请求返回数据：", request.response);
        if (this.postCallBack) {
            this.postCallBack(true, request.response);
        }
    };
    /**
     * http的post请求发送错误
     */
    HttpClient.prototype.onHttpPostIOError = function () {
        console.log("发送http的post请求返回错误");
        if (this.postCallBack) {
            this.postCallBack(true, "");
        }
    };
    /**
     * http的post请求进度
     */
    HttpClient.prototype.onHttpPostProgress = function () {
    };
    return HttpClient;
}());
__reflect(HttpClient.prototype, "HttpClient");
