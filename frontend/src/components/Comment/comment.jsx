import "./comment.sass";

export const CommentComponent = ({comment}) => {
  // JS
  const urlDelete = "http://localhost/testFinalProjects/deleteComment.php";
  const cookies = document.cookie.split(";");

  let userId;

  cookies.forEach((cookie) => {
    if (cookie.includes("userId")) userId = cookie.split("=")[1];
  });

  const checkComment = () => {
    if(comment.CommentUserId === Number(userId)){
      return <button onClick={deleteComment}>Delete</button>
    }
  }

  const deleteComment = () => {
    fetch(`${urlDelete}?commentId=${comment.CommentId}`, { method: 'DELETE' });
  }

  // HTML
  return (
    <div className="comentario">
      <div className="d-flex flex-direction-row">
        <p className="mb-5">{comment.CommentText}</p>
      </div>
      <p>
        <a href="">{comment.CommentUsername}</a> {checkComment()}
      </p>
    </div>
  );
};
