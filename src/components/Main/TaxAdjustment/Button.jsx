import React from 'react';

export default function Button(props) {
  const title = props.title;
  const subTitle = props.subTitle;

  return (
    <div
      className="bg-white border rounded-xl"
      style={{ width: '100%', height: '100%' }}
    >
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
}
