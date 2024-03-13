import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, removeUser } from '../../store/reducers/user';
import { getKakaoToken } from '../../lib/apis/user';

export default function MainPage() {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code !== null) {
      getKakaoToken(code).then((resp) => {
        console.log('token: ', resp);
      });
    }
  }, [code]);

  const userState = useSelector((state) => state.user);
  console.log(userState);

  const dispatch = useDispatch();

  const clickTestBtn = () => {
    dispatch(setUser('test'));
    console.log('click: ', userState);
  };

  const clickRemoveBtn = () => {
    dispatch(removeUser());
    console.log('click: ', userState);
  };

  return (
    <div>
      <p>MainPage</p>
      <button className="m-4" onClick={() => clickTestBtn()}>
        test
      </button>

      <button className="m-4" onClick={() => clickRemoveBtn()}>
        remove
      </button>
    </div>
  );
}
