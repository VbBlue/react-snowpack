import React from 'react';

export const Menu = ({ callback }: { callback: (opt: String) => void }) => {
  return (
    <ul>
      <li>
        <button onClick={() => callback('join')}>join</button>
      </li>
      <li>
        <button onClick={() => callback('login')}>login</button>
      </li>
      <li>
        <button onClick={() => callback('community')}>community</button>
      </li>
      <li>
        <button onClick={() => callback('chatting')}>chatting</button>
      </li>
      <li>
        <button onClick={() => callback('mypage')}>mypage</button>
      </li>
    </ul>
  );
};
