import React from 'react';
import axios from 'axios';

export default function LoginPage() {
  const clickLoginBtn = async () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = 'http://localhost:5173/main';

    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    window.location.href = kakaoUrl;
  };

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => clickLoginBtn()}>kakao login</button>
    </div>
  );
}
