import { auth, provider } from '@/app/firbase';
import './Login.scss';

import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import Image from 'next/image';

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(err => alert(err))
  }

  return (
    <div className="login">
      <div className="loginLogo">
        <Image className='loginLogoImg' src={'/discordIcon.png'} alt='' width={450} height={450} />
      </div>

      <Button className='loginButton' onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login