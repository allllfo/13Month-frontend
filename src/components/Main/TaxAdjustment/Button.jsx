import React from 'react';

export default function Button(props) {
  const title = props.title;
  const subTitle = props.subTitle;

  return (
    <div className="">
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
}
