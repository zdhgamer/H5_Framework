package controllers


import (
	"github.com/astaxie/beego"
	"fmt"
	"github.com/astaxie/beego/httplib"
	"encoding/json"
)

var appId = "wx20b7d401030b8032"
var appsecret = "abf14af264d2c32216c881b73b687721"

var tokenResult TockenBack

var user UserInfoBack

type TockenBack struct {
	AccessToken string `json:"access_token"`
	ExpiresIn int `json:"expires_in"`
	RefreshToken string `json:"refresh_token"`
	Openid string `json:"openid"`
	Scope string `json:"scope"`
}

type UserInfoBack struct {
	OpenId string `json:"openid"`
	NickName string `json:"nickname"`
	Sex string `json:"sex"`
	Province string `json:"province"`
	City string `json:"city"`
	Country string `json:"country"`
	HeadImgUrl string `json:"headimgurl"`
	Privilege []string `json:"privilege"`
	UnionId string `json:"unionid"`
}

type UserInfoConnectController struct {
	beego.Controller
}

func (c *UserInfoConnectController) Get() {

	code := c.GetString("code")
	fmt.Println("拿到的code是："+code)

	url:="https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appId+"&secret="+appsecret+"&code="+code+"&grant_type=authorization_code"
	fmt.Println("请求token的连接为："+url)

	back := httplib.Get(url)
	result,_ := back.String()
	fmt.Println("返回的值为："+result)

	err:= json.Unmarshal([]byte(result),&tokenResult)
	if err != nil {
		fmt.Println("转Json的时候失败："+err.Error())
	} else {
		fmt.Println("拿到的token为："+tokenResult.AccessToken)

	}

	userInfoUrl:="https://api.weixin.qq.com/sns/userinfo?access_token="+tokenResult.AccessToken+"&openid=OPENID&lang=zh_CN";
	userBack := httplib.Get(userInfoUrl)
	userResult,_ := userBack.String()
	fmt.Println("返回的值为："+userResult)

	//uErr:= json.Unmarshal([]byte(userResult),&user)
	//
	//if uErr!=nil{
	//	fmt.Println("转Json的时候失败："+uErr.Error())
	//}

	c.Ctx.WriteString(userResult)
}
