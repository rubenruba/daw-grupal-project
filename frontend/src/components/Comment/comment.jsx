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
      return <button className="delete-button" onClick={deleteComment}>Delete | </button>
    }
  }

  const deleteComment = () => {
    if(window.confirm('¿Quieres borrar la respuesta?')){
      fetch(`${urlDelete}?commentId=${comment.CommentId}`, { method: 'DELETE' });
      document.getElementById(atob(comment.CommentId)).remove();
    }
  }

  const returnDate = (date) => {
    const dat = new Date(date);
    return `${dat.getDate()} - ${dat.getMonth() + 1} - ${dat.getFullYear()}`;
  }

  // HTML
  return (
    <div className="comentario mb-3" id={atob(comment.CommentId)}>
      <p className="mb-2">{comment.CommentText}</p>
      <p className="text-end mb-2">
        {checkComment()} {returnDate(comment.CommentDate)} | <a href="">{comment.CommentUsername}</a>
      </p>
    </div>
  );
};
