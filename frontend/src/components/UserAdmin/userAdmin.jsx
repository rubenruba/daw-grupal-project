import { useState } from "react";
import deleteImage from "../../assets/svg/delete.svg";
import arrowDownImage from "../../assets/svg/arrow-down.svg";
import "./userAdmin.sass";

export const UserAdminComponent = ({ user }) => {
  // JS
  const urlDeleteUser =
    "http://ec2-3-86-101-85.compute-1.amazonaws.com/testFinalProjects/new/actions/deleteData/deleteUser.php";
  const urlDeleteComment =
    "http://ec2-3-86-101-85.compute-1.amazonaws.com/testFinalProjects/new/actions/deleteData/deleteComment.php";
  const urlDeletePost =
    "http://ec2-3-86-101-85.compute-1.amazonaws.com/testFinalProjects/new/actions/deleteData/deletePost.php";
  const [open, setOpen] = useState(false);

  const deleteUser = (userId) => {
    if (window.confirm("¿Desea borrar el usuario?")) {
      fetch(`${urlDeleteUser}?userId=${userId}`, { method: "DELETE" }).then(
        () => {
          const removeUser = document.getElementById(btoa(userId));
          removeUser.remove();
        }
      );
    }
  };

  const deleteComment = (commentId) => {
    if (window.confirm("¿Desea borrar el comentario?")) {
      fetch(`${urlDeleteComment}?commentId=${commentId}`, {
        method: "DELETE",
      }).then(() => {
        const removeComment = document.getElementById("comment" + commentId);
        removeComment.remove();
      });
    }
  };

  const deletePost = (postId) => {
    if (window.confirm("¿Desea borrar el post?")) {
      fetch(`${urlDeletePost}?postId=${postId}`, { method: "DELETE" }).then(
        () => {
          const removePost = document.getElementById("post" + postId);
          removePost.remove();
        }
      );
    }
  };

  const openUser = () => {
    setOpen(!open);
  };

  // HMTL
  return (
    <div className="user-info-container" id={btoa(user.userId)}>
      <div className="user-info">
        <p>
          {user.username} - {user.email}
        </p>
        <div className="option-icons d-flex">
          {/* <img src="svg/mail.svg" alt="Envelope icon"/> */}
          <img
            onClick={() => deleteUser(user.userId)}
            src={deleteImage}
            alt="Delete icon"
          />
          <img onClick={openUser} src={arrowDownImage} alt="Arrow down icon" />
        </div>
      </div>
      {open && (
        <div className="px-4 pt-2 all-info">
          {/* Muestra todos los posts del usuario */}
          {user.posts.map((post) => {
            return (
              <p id={"post" + post.postId}>
                <a href={`/post/${post.postId}`}>Post</a> - {post.title}{" "}
                <span onClick={() => deletePost(post.postId)}>delete</span>
              </p>
            );
          })}
          {/* Muestra todos los comentarios del usuario */}
          {user.comments.map((comment) => {
            return (
              <p id={"comment" + comment.commentId}>
                <a href={`/post/${comment.postId}`}>Comment</a> - {comment.text}{" "}
                <span onClick={() => deleteComment(comment.commentId)}>delete</span>
              </p>
            );
          })}
          {/* Si no tiene nada muestra una frase */}
          {user.posts.length <= 0 && user.comments.length <= 0 && (
            <p className="fst-italic">No posts or comments about this user</p>
          )}
        </div>
      )}
    </div>
  );
};
