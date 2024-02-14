import './post.sass';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CommentComponent } from '../../components/Comment/comment';


export const PostPage = () => {
  // JS
  const urlPost = "http://localhost/testFinalProjects/new/actions/readData/getOnePost.php";
  const urlComment = "http://localhost/testFinalProjects/new/actions/createData/createComment.php";
  const { postId } = useParams('postId');
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [files, setFiles] = useState([]);
  const [labels, setLabels] = useState([]);
  const [starPath, setStarPath] = useState('/svg/star-outlined.svg');
  
  const changePath = () => {
    if (starPath === '/svg/star-outlined.svg') {
      setStarPath('/svg/star-solid.svg');
      //addFavourite();
    } else {
      setStarPath('/svg/star-outlined.svg');
      //deleteFavourite();
    }
  }

  useEffect(() => {
    fetch(`${urlPost}?postId=${postId}`)
    .then((response) => {
      if(!response.ok){
        throw new Error('Post Not found');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      setPost(data.post);
      setLabels(data.post.Labels);
      setFiles(data.post.Files);
      setComments(data.post.Comments);
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
  }, []);

  const returnDate = (date) => {
    const dat = new Date(date);
    return `${dat.getDate()} - ${dat.getMonth() + 1} - ${dat.getFullYear()}`;
  }
  
  // HTML
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <section className='post-section d-flex justify-content-between'>
        <article className='post p-4 container'>
          <h2 className='fw-bold'>{post.PostTitle}</h2>
          <div className='d-flex flex-column flex-sm-row justify-content-between'>
            <div className='d-flex flex-column justify-content-between'>
              <p>{post.PostText}</p>
              <p><a href={'/user/'+post.PostUsername}>{post.PostUsername}</a> | {returnDate(post.PostDate)}</p>
            </div>
            <ul className='list-group ms-sm-3'>
              {files.map(file => {
                const fileBLOB = new Blob([atob(file.FileBLOB)], {type: file.FileType})
                return <li className='list-group-item'><a href={URL.createObjectURL(fileBLOB)} download={file.FileName}>{file.FileName}</a></li>
              })}
            </ul>
          </div>

          <div className='mobile-labels p-0 py-3 d-flex d-sm-none flex-wrap'>
            {labels.map(label => {
              return <button><a href=''>{label.Name}</a></button>
            })} 
          </div>
          
          <div className='answers mt-4'>
            <h2>Respuestas</h2>
            {comments.map(comment => {
              return <CommentComponent comment={comment}></CommentComponent>
            })}
            {comments.length <= 0 && (
              <p>Aún no hay respuestas</p>
            )}
          </div>

          <div>
            <h2 className="my-3">Tu respuesta</h2>
            <form action={urlComment} method="post">
              <div className="mb-3">
                <textarea className="form-control" name="comment" rows="7" required maxLength='384'></textarea>
                <input type="text" className='d-none' value={postId} name='postId'/>
              </div>
              <button type="submit" className='comment-button'>Enviar</button>
            </form>
          </div>

        </article>

        <aside className='d-none d-sm-block text-center'>
          <h2 className='mt-3 fw-bold'>Labels</h2>
          <ul className='list-group p-4 align-items-center'>
            {labels.map(label => {
              return <li className='list-group-item label'><a href=''>{label.Name}</a></li>
            })} 
          </ul>
        </aside>
      </section>

      <FooterComponent></FooterComponent>
    </>
  );
};
