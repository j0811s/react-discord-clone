import './Chat.scss';
import './ChatHeader.scss';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '@/lib/hooks';
import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useState } from 'react';
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/firbase';
import useSubCollection from '@/app/hooks/useSubCollection';

export interface Messages {
  timestamp: Timestamp,
  message: string,
  user: {
    uid: string,
    photo: string,
    email: string,
    displayName: string
  }
}

function Chat() {
  const [inputText, setInputText] = useState<string>('');
  const channelId = useAppSelector(state => state.channel.channelId);
  const channelName = useAppSelector(state => state.channel.channelName);
  const user = useAppSelector(state => state.user.user);
  const { subDocuments: messages } = useSubCollection('channels', 'messages');

  const sendMessage = async (text: string) => {
    if (!text || !text.match(/\S/g)) return;
    
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      'channels',
      String(channelId),
      'messages'
    );

    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      message: text,
      timestamp: serverTimestamp(),
      user: user
    });

    setInputText(prevState => '');
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className='chatMessageContainer'>
        {
          messages.map((message, index) => (
            <ChatMessage
              message={message?.message}
              timestamp={message?.timestamp}
              user={message?.user}
              key={`${channelName}-${message?.user?.uid}-${index}`}
            />
          ))
        }
      </div>
      <div className='chatInput'>
        <AddCircleOutlineIcon />
        <form className='chatInputForm'>
          <textarea
            className='chatInputContent'
            placeholder='メッセージを入力'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputText(prevState => e.target.value)}
            onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.metaKey && e.code === 'Enter') {
                sendMessage(inputText);
              }
            }}
            value={inputText}
          />
          <button
            type='submit'
            className='chatSubmitBtn'
            aria-label='メッセージを送信する'
            onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
              e.preventDefault();
              sendMessage(inputText);
            }}
          >
            <SendIcon />
          </button>
        </form>
        <div className='chatInputIcons'>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat