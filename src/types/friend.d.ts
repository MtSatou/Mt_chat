export declare interface friend {
  userId?: string;
  nickname?: string;
  avatar: string;
}

/**粗略的好友信息 */
export declare interface friendType extends friend {
  /**座右铭 */
  motto: string;
  /**是否在线 */
  onLine: boolean;
}

export declare interface friendListType {
  id: string;
  title: string;
  createdTime: number;
  updatedTime: number;
  children?: friendType[]
}