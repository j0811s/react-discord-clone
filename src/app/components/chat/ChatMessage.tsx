import './ChatMessage.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Messages } from './Chat';
import Image from 'next/image';

type Props = Messages;

function ChatMessage({ message, timestamp, user }: Props) {
  return (
    <div className="chatMessage">
      { user?.photo ? <Image className='chatMessageIcon' src={user.photo} alt='' width={40} height={40} /> : <AccountCircleIcon className='chatMessageIcon' />}
      <div className='chatMessageInfo'>
        <p className='chatMessageUserName'>{ user?.displayName }<span className='chatMessageTimestamp'>{ new Date(timestamp?.toDate()).toLocaleString() }</span></p>
        <p className='chatMessageContent'>{ message.replace("\\\n", "\n") }</p>
      </div>
    </div>
  )
}

export default ChatMessage