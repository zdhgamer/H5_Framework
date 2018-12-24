package controllers

import (
	"sync"
	"github.com/gorilla/websocket"
	"fmt"
	"encoding/binary"
)

type WsConn struct {
	Id string
	Ip string
	Conn *websocket.Conn
	received chan []byte
}

type WsManager struct {
	Conns sync.Map
	received chan []byte
}

var WSM WsManager

func (this *WsManager) Start() {
	for {
		if this.received!=nil{
			msg:=<-this.received
			fmt.Println(msg)
			msgIdByte := msg[0:4]
			msg = msg[4:]
			//拿到消息长度
			msgId:= BytesToInt32(msgIdByte)
			fmt.Println(msgId)
		}
	}
}

func UInt32ToBytes(i uint32) []byte {
	var buf = make([]byte, 4)
	binary.BigEndian.PutUint32(buf, uint32(i))
	return buf
}

func BytesToInt32(buf []byte) uint32 {
	return uint32(binary.BigEndian.Uint32(buf))
}