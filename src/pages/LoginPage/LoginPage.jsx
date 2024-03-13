import React, { useEffect } from 'react';
import { getKakaoToken } from '../../lib/apis/user';

export default function LoginPage() {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code !== null) {
      console.log('code: ', code);
      getKakaoToken(code);
    }
  }, [code]);

  const clickLoginBtn = async () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const kakaoCodeUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    window.location.href = kakaoCodeUrl;
  };

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => clickLoginBtn()}>kakao login</button>
    </div>
  );
}
