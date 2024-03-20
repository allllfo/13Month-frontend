import axios from "axios";

export const getComment = async (code) => {
  try {
    const getCommentUrl = "/api/comment/" + code;
    const resp = await axios.get(getCommentUrl);

    return resp.data;
  } catch (err) {
    console.log(err);
  }
};

export const publishComment = (code) => {};

export const publishReply = (code, commentId) => {};

export const likeComment = () => {};

export const dislikeComment = () => {};
