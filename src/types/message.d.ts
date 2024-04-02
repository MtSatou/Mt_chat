
export interface messageContent {
  // 消息类型
  messageType: "text" | "image" | "file" | "audio" | "video" | "revocation" | "system";
  // 消息内容
  text?: string;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
  length?: number;
}

export interface messageListItem {
  id: string;
  avatar: string;
  userId: string;
  nickname: string;
  // 发送时间
  createTime: string;
  // 可触达（是否可以右键选中）
  attainability: boolean;
  // 消息体
  messageContent: messageContent[];
}