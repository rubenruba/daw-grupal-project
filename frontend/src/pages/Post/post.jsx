import './post.sass';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CommentComponent } from '../../components/Comment/comment';


export const PostPage = () => {
  // JS
  const urlPost = "http://localhost/testFinalProjects/retrieveData/getOnePost.php";
  const urlComment = "http://localhost/testFinalProjects/insertData/addComment.php";
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
      console.log(post)
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
  }, []);
  
  // HTML
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <aside className="aside d-none d-sm-block">
        <ul className='labels-list'>
          {labels.map(label => {
            return <li><a href=''>{label.Name}</a></li>
          })}  
        </ul>
      </aside>
      <div className="container" id='container-post'>
        <h2 className="mb-3 post-title">{post.PostTitle}</h2>
        <div id='post-pctab'className='d-none d-sm-block'>
          <div className="d-flex flex-direction-row">
            <button className='star' onClick={changePath}>
              <img src={starPath} alt="Star" />
              <p>0</p>
            </button>

            <p id="textopost" className="mb-5 post-text">{post.PostText}</p>
            <div id="archivos" className="card">
              <div className="card-body">
                <h5 className="card-title">Archivos adjuntos</h5>
                <ul className="list-group files-list">
                  {files.map(file => {
                    return <li><a href={''} download>{file.FileName}</a></li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id='post-movil' className=' d-block d-sm-none'>
          <div className="d-flex flex-column">
            <button className='star' onClick={changePath}>
              <img src={starPath} alt="Star" />
              <p>0</p>
            </button>

            <p id="textopost" className="mb-5 post-text">{post.PostText}</p>
            <div id="archivos" className="card">
              <div className="card-body">
                <h5 className="card-title">Archivos adjuntos</h5>
                <ul className="list-group files-list">
                  {files.map(file => {
                    return <li><a href={''} download>{file.FileName}</a></li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="container d-block d-sm-none" id="etiquetas-movil">
            <ul className='labels-list'>
              {labels.map(label => {
                return <li><a href=''>{label.Name}</a></li>
              })}  
            </ul> {/* TO DO - Not working in mobile */}
          </div>
        </div>
        <p><a href="">Juan789</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Asked 2 years and 3 months ago</p>
      </div>
      <div className="container" id='comentarios-users'>
        <h2 className="mb-3">Respuestas</h2>
        <div id='comentarios'>
        {
          comments.map(comment => {
            return <CommentComponent comment={comment}></CommentComponent>
          })
        }
        </div>
      </div>

      <div className="container" id='comentar-usuario'>
        <h2 className="mb-3">Tu respuesta</h2>
        <form action={urlComment} method="post">
          <div className="mb-3">
            <label for="comentario" className="form-label">Comentario</label>
            <textarea className="form-control" id="comentario" name="comment" rows="3" required></textarea>
            <input type="text" className='d-none' value={postId} name='postId'/>
          </div>
          <button type="submit" className="btn btn-primary" id="boton-comentario">Enviar</button>
        </form>
      </div>

      <FooterComponent></FooterComponent>

    </>
  );
};
