import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import Image from "next/image";
import { auth, db } from '@/app/firbase';
import { useAppSelector } from '@/lib/hooks';

import "./Sidebar.scss";
import SidebarChannel from './SidebarChannel';
import useCollection from '@/app/hooks/useCollection';
import { DocumentData, addDoc, collection } from 'firebase/firestore';

export interface Channel {
  id: string,
  name: DocumentData
}

const Sidebar = () => {
  const logout = () => auth.signOut();
  const { uid, photo, email, displayName } = useAppSelector(state => state.user.user);
  const { documents: channels } = useCollection('channels');

  const addChannel = async () => {
    const channelName: string | null = prompt("新しいチャンネルを作成します");

    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        channelName: channelName
      })
    }
  }

  return (
    <nav className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <Image src={'/discordIcon.png'} alt="" width={100} height={100} />
        </div>
        <div className="serverIcon">
          <Image src={'/next.svg'} alt="" width={100} height={100} />
        </div>
        <div className='sidebarLogout'>
          <button className='sidebarLogoutButton' onClick={logout} type='button' aria-label='ログアウト'>
            <LogoutIcon />
          </button>
        </div>
      </div>

      {/* sidebarRight */}
      <div className="sidebarRight">
        <header className="sidebarTop">
          <h2 className='sidebarTopTitle'>Discord</h2>
          <ExpandMoreIcon />
        </header>
        <div className='sidebarChannels'>
          <div className="sidebarChannelsHeader">
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h3 className='sidebarHeaderTitle'>チャンネル名</h3>
            </div>
            <button type='button' aria-label="チャンネルを追加する" onClick={addChannel}>
              <AddIcon className='sidebarAddIcon' />
            </button>
          </div>
          <div className='sidebarChannelList'>
            {
              channels.map(channel => (
                <SidebarChannel channelData={channel} key={channel.id} />
              ))
            }
          </div>
        </div>
        <footer className='sidebarFooter'>
          <figure className='sidebarAccount'>
            <Image className='sidebarAccountIcon' src={photo ? photo : ''} alt='' width={100} height={100} />
            <div className='sidebarAccountName'>
              <span className='sidebarAccountDisplayName'>{displayName}</span>
              <span className='sidebarAccountId'>{uid}</span>
            </div>
          </figure>
          <div className='sidebarVoice'>
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </footer>
      </div>
    </nav>
  )
}

export default Sidebar