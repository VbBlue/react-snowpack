import React, { useState } from 'react';
import { Menu } from './Menu';
import { Join } from './Join';
import { Login } from './Login';
import { Community } from './Community';
import { Chatting } from './Chatting';
import { Mypage } from './Mypage';

export const Main = () => {
  const [name, setName] = useState<String>('join');

  return (
    <>
      <Menu callback={(opt: String) => setName(opt)} />
      {name === 'join' && <Join />}
      {name === 'login' && <Login />}
      {name === 'community' && <Community />}
      {name === 'chatting' && <Chatting />}
      {name === 'mypage' && <Mypage />}
    </>
  );
};
