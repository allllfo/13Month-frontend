import React from "react";

export default function Introduce(props) {
  const title = props.title;
  const subTitle = props.subTitle;
  const img = props.img;

  return (
    <div>
      <div className="mt-20 text-center">
        <p className="text-bold text-2xl">{title}</p>
        <p className="mt-2 text-xl">{subTitle}</p>
      </div>

      <div className="flex justify-center">
        <img src={img} className="mt-20 w-64" />
      </div>
    </div>
  );
}
