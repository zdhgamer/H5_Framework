var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpPostFormData = (function () {
    function HttpPostFormData() {
        this.data = "";
    }
    HttpPostFormData.prototype.setParameter = function (key, value) {
        if (this.data == "") {
            this.data += key + "=" + value;
        }
        else {
            this.data += "&" + key + "=" + value;
        }
    };
    HttpPostFormData.prototype.getData = function () {
        return this.data;
    };
    return HttpPostFormData;
}());
__reflect(HttpPostFormData.prototype, "HttpPostFormData");
var HttpGetFormData = (function () {
    function HttpGetFormData() {
        this.data = "?";
    }
    HttpGetFormData.prototype.setParameter = function (key, value) {
        if (this.data == "?") {
            this.data += key + "=" + value;
        }
        else {
            this.data += "&" + key + "=" + value;
        }
    };
    HttpGetFormData.prototype.getData = function () {
        return this.data;
    };
    return HttpGetFormData;
}());
__reflect(HttpGetFormData.prototype, "HttpGetFormData");
