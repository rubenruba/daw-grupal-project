import './post.sass';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';


export const PostPage = () => {
  // JS
  
  // HTML
  return (
    <>
    <HeaderComponent></HeaderComponent>
      <aside class="aside">
        <ul>
          <li><a href="#">Etiqueta 1</a></li>
          <li><a href="#">Etiqueta 2</a></li>
          <li><a href="#">Etiqueta 3</a></li>
        </ul>
      </aside>
      <div class="container" id='container-post'>
        <h2 class="mb-3">Puedo comerme una tortuga mientras estudio JS y me estoy cagando?</h2>
        <div id='post'>
          <div class="d-flex flex-direction-row">
            <div id='likes'>
              <img src="/img/estrella.png" alt="" id='estrella'/>
              <p>0</p>
            </div>

            <p id="textopost" class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lectus nec odio ultricies, quis dapibus tortor convallis. Nam eu ipsum nulla. Pellentesque ac sagittis nisi, at finibus lacus. Proin felis ipsum, sollicitudin id posuere a, ultricies eget velit. Aenean auctor erat finibus luctus lacinia. Suspendisse sit amet nulla id arcu egestas volutpat. Vestibulum sodales ac ex sed fermentum. Fusce vel semper enim. Maecenas laoreet ipsum eu dignissim laoreet. Phasellus eget tortor fermentum, ullamcorper arcu lacinia, condimentum libero. Proin ullamcorper accumsan sapien, nec ullamcorper nunc luctus sed. Curabitur tristique elementum quam.</p>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Archivos adjuntos</h5>
                <ul class="list-group">
                  <li class="list-group-item"><a href="#">Archivo 1</a></li>
                  <li class="list-group-item"><a href="#">Archivo 2</a></li>
                  <li class="list-group-item"><a href="#">Archivo 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p><a href="">Juan789</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Asked 2 years and 3 months ago</p>
      </div>
      <div class="container" id='comentarios-users'>
        <h2 class="mb-3">Answers</h2>
        <div id='comentarios'>
          <div class='comentario'>
            <div class="d-flex flex-direction-row">
              <p class="mb-5 textocomment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lectus nec odio ultricies, quis dapibus tortor convallis. Nam eu ipsum nulla. Pellentesque ac sagittis nisi, at finibus lacus. Proin felis ipsum, sollicitudin id posuere a, ultricies eget velit. Aenean auctor erat finibus luctus lacinia. Suspendisse sit amet nulla id arcu egestas volutpat. Vestibulum sodales ac ex sed fermentum. Fusce vel semper enim. Maecenas laoreet ipsum eu dignissim laoreet. Phasellus eget tortor fermentum, ullamcorper arcu lacinia, condimentum libero. Proin ullamcorper accumsan sapien, nec ullamcorper nunc luctus sed. Curabitur tristique elementum quam.</p>
            </div>
            <p><a href="">Juan789</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 years and 3 months ago</p>
          </div>
          <div class='comentario'>
            <div class="d-flex flex-direction-row">
              <p class="mb-5 textocomment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lectus nec odio ultricies, quis dapibus tortor convallis. Nam eu ipsum nulla. Pellentesque ac sagittis nisi, at finibus lacus. Proin felis ipsum, sollicitudin id posuere a, ultricies eget velit. Aenean auctor erat finibus luctus lacinia. Suspendisse sit amet nulla id arcu egestas volutpat. Vestibulum sodales ac ex sed fermentum. Fusce vel semper enim. Maecenas laoreet ipsum eu dignissim laoreet. Phasellus eget tortor fermentum, ullamcorper arcu lacinia, condimentum libero. Proin ullamcorper accumsan sapien, nec ullamcorper nunc luctus sed. Curabitur tristique elementum quam.</p>
            </div>
            <p><a href="">Juan789</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 years and 3 months ago</p>
          </div>
          <div class='comentario'>
            <div class="d-flex flex-direction-row">
              <p class="mb-5 textocomment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales lectus nec odio ultricies, quis dapibus tortor convallis. Nam eu ipsum nulla. Pellentesque ac sagittis nisi, at finibus lacus. Proin felis ipsum, sollicitudin id posuere a, ultricies eget velit. Aenean auctor erat finibus luctus lacinia. Suspendisse sit amet nulla id arcu egestas volutpat. Vestibulum sodales ac ex sed fermentum. Fusce vel semper enim. Maecenas laoreet ipsum eu dignissim laoreet. Phasellus eget tortor fermentum, ullamcorper arcu lacinia, condimentum libero. Proin ullamcorper accumsan sapien, nec ullamcorper nunc luctus sed. Curabitur tristique elementum quam.</p>
            </div>
            <p><a href="">Juan789</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 years and 3 months ago</p>
          </div>
        </div>
      </div>
      <div class="container" id='comentar-usuario'>
        <h2 class="mb-3">Your answer</h2>
        <form action="#" method="post">
          <div class="mb-3">
            <label for="comentario" class="form-label">Comentario</label>
            <textarea class="form-control" id="comentario" name="comentario" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="boton-comentario">Enviar</button>
        </form>
      </div>

      <FooterComponent></FooterComponent>

    </>
  );
};
