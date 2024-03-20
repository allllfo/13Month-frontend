import React, { useEffect, useState } from "react";

import Input from "./Input";
import Writing from "./Writing";

import { getComment } from "~/lib/apis/comment";

export default function Community(props) {
  const code = props.code;

  const [writings, setWritings] = useState([]);

  useEffect(() => {
    getComment(code).then((resp) => {
      setWritings(resp);
      console.log("resp: ", resp);
    });
  }, []);

  return (
    <div className="pt-4 mb-20">
      <p className="text-md m-1">
        <span className="font-bold">{writings.length}</span>개의 댓글
      </p>
      <Input code={code} depth={0} />

      {writings.map((ele, idx) => (
        <Writing key={idx} writing={ele} code={code} />
      ))}
    </div>
  );
}
