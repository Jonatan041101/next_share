import React from "react";

interface IProps {
  params: { id: string };
}

const Post = ({ params: { id } }: IProps) => {
  return (
    <div>
      PROPS
      {id}
    </div>
  );
};

export default Post;
