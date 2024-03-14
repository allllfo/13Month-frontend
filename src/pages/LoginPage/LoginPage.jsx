import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserId,
  setkakaoToken,
  removeUser,
} from '../../store/reducers/user';
import {
  getCodeWithKakaoLogin,
  getKakaoToken,
  getKakaoInfo,
} from '../../lib/apis/user';

export default function LoginPage() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log('state: ', userState);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('code: ', code);

    // 유저 찾기, id 반환
    // 없으면 생성, id 반환
    // 토큰, userId 리덕스 저장
    // /main으로 이동
    if (code !== null) {
      getKakaoToken(code)
        .then((token) => {
          console.log('token: ', token);
          dispatch(setkakaoToken(token));

          return getKakaoInfo(token);
        })
        .then((info) => {
          console.log('info: ', info);
        })
        .catch((err) => {
          console.log('err: ', err);
          dispatch(removeUser());
        });
    }
  }, []);

  const clickLoginBtn = async () => {
    getCodeWithKakaoLogin();
  };

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => clickLoginBtn()}>kakao login</button>
    </div>
  );
}
