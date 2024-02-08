import { useState } from "react";
import "./userAdmin.sass";

export const UserAdminComponent = ({ user }) => {
  // JS
  const urlDeleteUser = "http://localhost/testFinalProjects/deleteUser.php";
  const [open, setOpen] = useState(false);

  const deleteUser = (userId) => {
    if (window.confirm("¿Desea borrar el usuario?")) {
      fetch(`${urlDeleteUser}?userId=${userId}`, { method: "DELETE" })
      .then(() => {
        const removeUser = document.getElementById(btoa(userId));
        removeUser.remove();
      });
    }
  };

  const openUser = () => {
    setOpen(!open);
  }

  // HMTL
  return (
    <div className="user-info-container" id={btoa(user.userId)}>
        <div className="user-info">
            <p>{user.username} - {user.email}</p>
            <div className="option-icons d-flex">
                <img src="svg/mail.svg" alt="Envelope icon"/> { /*TO DO - Mail action*/ } 
                <img onClick={() => deleteUser(user.userId)} src="svg/delete.svg" alt="Delete icon"/>
                <img onClick={openUser} src="svg/arrow-down.svg" alt="Arrow down icon"/>
            </div>
        </div>
        {open && (
            <div className="px-4 pt-2">
                {/* Muestra todos los posts del usuario */}
                {user.posts.map(post => {
                    return <p><a href={`/post/${post.postId}`}>Post</a> - {post.title}</p>
                })}
                {/* Muestra todos los comentarios del usuario */}
                {user.comments.map(comment => {
                    return <p><a href={`/post/${comment.postId}`}>Comment</a> - {comment.text}</p>
                })}
                {/* Si no tiene nada muestra una frase */}
                {(user.posts.length <= 0 && user.comments.length <= 0) && (
                    <p className="fst-italic">No posts or comments about this user</p>
                )}
            </div>
        )}
    </div>
  );
};
