import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, removeUser } from '../../store/reducers/user';

export default function MainPage() {
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
