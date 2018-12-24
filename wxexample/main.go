package main

import (
	_ "wxexample/routers"
	"github.com/astaxie/beego"
	"wxexample/controllers"
)

func main() {
	go controllers.WSM.Start()
	beego.Run()

}

