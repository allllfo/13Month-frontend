import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import WriterInfo from "./WriterInfo";
import Like from "./Like";
import Comment from "./Comment";
import Reply from "./Reply";

export default function Writing(props) {
  const writing = props.writing;
  const userState = useSelector((state) => state.user13th);

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
        <p className="ml-12 text-sm">{writing.createdDate}</p>

        <div className="flex gap-4 h-8">
          <Like
            totalLike={totalLike}
            setTotalLike={setTotalLike}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            writingId={writing._id}
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
          writing.replyIds.map((ele, idx) => {
            return <Reply key={ele} writing={ele} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
