import React from "react";

const commentData = [
  {
    name: "Akash",
    text: "Nested comment stich Incomming...",
    replies: [
      {
        name: "Akash",
        text: "Nested comment stich Incomming...",
      },
      {
        name: "Akash",
        text: "Nested comment stich Incomming...",
      },
      {
        name: "Akash",
        text: "Nested comment stich Incomming...",
      },
      {
        name: "Akash",
        text: "Nested comment stich Incomming...",
        replies: [
          {
            name: "Akash",
            text: "Nested comment stich Incomming...",
          },
          {
            name: "Akash",
            text: "Nested comment stich Incomming...",
          },
          {
            name: "Akash",
            text: "Nested comment stich Incomming...",
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-400">
      <img
        src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
        className="w-8 h-8"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentData }) => {
  return commentData?.map((comment, index) => (
    <>
      <Comment data={comment} />
      <div className="border pl-5">
        <CommentList commentData={comment.replies} />
      </div>
    </>
  ));
};

const CommentContainer = () => {
  return (
    <>
      <div className="">Comments</div>
      <CommentList commentData={commentData} />
    </>
  );
};

export default CommentContainer;
