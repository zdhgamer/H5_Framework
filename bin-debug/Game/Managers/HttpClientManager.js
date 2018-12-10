var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpClientManager = (function () {
    function HttpClientManager() {
        if (!this.httpClient) {
            this.httpClient = new HttpClient();
        }
    }
    HttpClientManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new HttpClientManager();
        }
        return this.instance;
    };
    /**
     * 发送一个http的get请求
     */
    HttpClientManager.prototype.sendHttpByGet = function (url, callBack) {
        this.httpClient.sendHttpByGet(url, callBack);
    };
    /**
     * 提交一个表单的Post
     */
    HttpClientManager.prototype.sendHttpPostForm = function (url, callBack, data) {
        this.httpClient.sendHttpPostForm(url, callBack, data);
    };
    return HttpClientManager;
}());
__reflect(HttpClientManager.prototype, "HttpClientManager");
