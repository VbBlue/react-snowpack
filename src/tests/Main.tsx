import React, { useState } from 'react';
import { Join } from './Join';
import { Login } from './Login';
import { Community } from './Community';
import { Chatting } from './Chatting';
import { Mypage } from './Mypage';

export const Main = () => {
  const [name, setName] = useState<String>('join');

  return (
    <>
      <ul>
        <li>
          <button onClick={() => setName('join')}>join</button>
        </li>
        <li>
          <button onClick={() => setName('login')}>login</button>
        </li>
        <li>
          <button onClick={() => setName('community')}>community</button>
        </li>
        <li>
          <button onClick={() => setName('chatting')}>chatting</button>
        </li>
        <li>
          <button onClick={() => setName('mypage')}>mypage</button>
        </li>
      </ul>
      {name === 'join' && <Join />}
      {name === 'login' && <Login />}
      {name === 'community' && <Community />}
      {name === 'chatting' && <Chatting />}
      {name === 'mypage' && <Mypage />}
    </>
  );
};
