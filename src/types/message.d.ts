import type { friend } from "./friend";
import type { tagTypes } from "@/types/tag";

/**0 公告, 1 私聊, 2 群聊  3 空*/
export declare type chatType = 0 | 1 | 2 | 3;

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
  tagType?: tagTypes;
  // 发送时间
  createTime: number;
  // 可触达（是否可以右键选中）
  attainability: boolean;
  // 消息体
  messageContent: messageContent[];
}