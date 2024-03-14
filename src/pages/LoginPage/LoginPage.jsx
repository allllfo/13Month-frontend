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
import { findUserWithNickname } from '../../lib/apis/user';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('state: ', userState);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('code: ', code);

    // 없으면 생성, id 반환
    // userId 리덕스 저장
    // /main으로 이동
    if (code !== null) {
      getKakaoToken(code)
        .then((token) => {
          console.log('token: ', token);
          dispatch(setkakaoToken(token));

          return getKakaoInfo(token);
        })
        .then(async (info) => {
          const kakaoProfile = info.kakao_account.profile;
          const nickname = kakaoProfile.nickname;

          console.log('nickname: ', nickname);
          const user = await findUserWithNickname(nickname);

          if (user._id != undefined) {
            dispatch(setUserId(user._id));
            navigate('/main');
            return;
          }
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
