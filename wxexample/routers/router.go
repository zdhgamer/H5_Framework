package routers

import (
	"wxexample/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.WxConnectController{})
}
