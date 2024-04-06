import type { friend } from "./friend";
import type { group } from "./group";
import type { messageListItem, chatType } from "./message"

/**会话历史列表粗略消息 */
export declare interface sessionMessageItem extends friend, group {
  id: string;
  type: chatType;
  createTime: number;
  messageList: messageListItem[];
} 