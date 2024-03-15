import React from 'react';

export default function Hello(props) {
  const nickname = props.nickname;
  const profile_image_url = props.profile_image_url;

  return (
    <div className="bg-red-500 text-right">
      <div>
        <img src={profile_image_url}></img>
        <p> {nickname}</p>
      </div>
    </div>
  );
}
