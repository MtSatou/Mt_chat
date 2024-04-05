import { extend } from "dayjs";
import { friend } from "./friend";
export declare interface messageContent {
  // 消息类型
  messageType: "text" | "image" | "file" | "audio" | "video" | "at" | "revocation" | "system";
  // 消息内容
  text?: string;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
  length?: number;
}

export declare interface messageListItem extends friend {
  id: string;
  // 头衔
  tag?: string;
  // 发送时间
  createTime: number;
  // 可触达（是否可以右键选中）
  attainability: boolean;
  // 消息体
  messageContent: messageContent[];
}