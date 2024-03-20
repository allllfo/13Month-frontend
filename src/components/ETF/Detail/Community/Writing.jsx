import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import WriterInfo from "./WriterInfo";
import Like from "./Like";
import Comment from "./Comment";
import Reply from "./Reply";
import Input from "./Input";

export default function Writing(props) {
  const code = props.code;
  const writing = props.writing;
  const userState = useSelector((state) => state.user13th);
  const getAndSetComment = props.getAndSetComment;

  const [isLiked, setIsLiked] = useState(false);
  const [totalLike, setTotalLike] = useState(writing.likeIds.length);

  const [openComment, setOpenComment] = useState(false);

  useEffect(() => {
    if (writing.likeIds.includes(userState.userId)) {
      setIsLiked(true);
    }
  }, []);

  return (
    <div className="mt-3 border p-2 rounded-md">
      <WriterInfo
        nickname={writing.nickname}
        profileImageUrl={writing.profileImageUrl}
      />

      <p className="ml-12 mb-4">{writing.content}</p>

      <div className="flex justify-between">
        <p className="ml-12 text-sm">
          {moment(writing.createdDate).format("YY.MM.DD, hh:mm a")}
        </p>

        <div className="flex gap-4 h-8">
          <Like
            totalLike={totalLike}
            setTotalLike={setTotalLike}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            commentId={writing._id}
          />
          <Comment
            totalComment={writing.replyIds.length}
            setOpenComment={setOpenComment}
            openComment={openComment}
          />
        </div>
      </div>

      <div className="ml-10">
        {openComment ? (
          <div>
            {writing.replyIds.map((ele, idx) => {
              return <Reply key={idx} writing={ele} />;
            })}

            <Input
              code={code}
              depth={1}
              getAndSetComment={getAndSetComment}
              commentId={writing._id}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
