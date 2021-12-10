import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

const img = {}

interface IMessage {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string; 
  };
}

export default function Chat() {

  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Oi Lázaro',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/640/480/any',
        },
      },
    ]);
  }, []);

  console.log(messages);

  
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}