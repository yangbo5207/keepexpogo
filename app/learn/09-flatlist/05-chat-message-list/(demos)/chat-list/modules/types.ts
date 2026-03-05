export type TextMessage = {
  id: string;
  type: "text";
  text: string;
  isMine: boolean;
  time: string;
};

export type ImageMessage = {
  id: string;
  type: "image";
  uri: string;
  width: number;
  height: number;
  isMine: boolean;
  time: string;
};

export type SystemMessage = {
  id: string;
  type: "system";
  text: string;
  time: string;
};

export type Message = TextMessage | ImageMessage | SystemMessage;
