import { MESSAGE_TYPE } from '@/constants';
interface HelloWorldMessage {
  message: string;
  type: MessageType;
}

interface Message {
  message?: string;
  type?: MessageType;
}

type MessageType = typeof MESSAGE_TYPE[keyof typeof MESSAGE_TYPE];

export type {
  HelloWorldMessage,
  MessageType,
  Message,
};
