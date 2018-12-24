package routers

import (
	"wxexample/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.WxConnectController{})
	beego.Router("/getUserInfo", &controllers.UserInfoConnectController{})
	beego.Router("/ws", &controllers.WebSocketController{},"*:Join")
}
