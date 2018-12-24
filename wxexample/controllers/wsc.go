package controllers

import (
	"github.com/gorilla/websocket"
	"net/http"
	"github.com/astaxie/beego"
	"fmt"
)

// WebSocketController handles WebSocket requests.
type WebSocketController struct {
	beego.Controller
}

// Join method handles WebSocket requests for WebSocketController.
func (this *WebSocketController) Join() {

	// Upgrade from http request to WebSocket.
	ws, err := websocket.Upgrade(this.Ctx.ResponseWriter, this.Ctx.Request, nil, 1024, 1024)
	if _, ok := err.(websocket.HandshakeError); ok {
		http.Error(this.Ctx.ResponseWriter, "Not a websocket handshake", 400)
		return
	} else if err != nil {
		beego.Error("Cannot setup WebSocket connection:", err)
		return
	}

	wsConn:=new(WsConn)
	wsConn.Conn = ws
	wsConn.Ip = ws.RemoteAddr().String()
	WSM.Conns.Store(ws.RemoteAddr().String(),wsConn)

	// Message receive loop.
	for {
		_, m, err := ws.ReadMessage()
		if err != nil {
			fmt.Println("客户端和服务器断开连接"+ws.RemoteAddr().String())
			WSM.Conns.Delete(ws.RemoteAddr())
			return
		}
		if m!=nil{
			if WSM.received == nil{
				WSM.received = make(chan []byte)
			}
			if len(m)<2 {
				fmt.Println("收到错误消息")
				continue
			}
			ws.WriteMessage(websocket.BinaryMessage,m)
			WSM.received<-m
			fmt.Println(len(WSM.received))
		}
	}
}
