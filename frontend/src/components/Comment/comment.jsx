import "./comment.sass";

export const CommentComponent = (commentProp) => {
  // JS
    const { comment } = commentProp;

  // HTML
  return (
    <div className="comentario">
      <div className="d-flex flex-direction-row">
        <p className="mb-5">{comment.CommentText}</p>
      </div>
      <p>
        <a href="">{comment.CommentUserId}</a>
      </p>
    </div>
  );
};
