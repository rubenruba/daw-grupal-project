import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import './createpost.sass';

export const CreatePostPage = () => {
    // JS
    // const url = 'url to aws';
    const url = 'http://localhost/testFinalProjects/insertData/insertPost.php';
  
    // HTML
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <section className='create-post-container pt-5 pb-5'>
                <form action={url} method='post' enctype="multipart/form-data">
                    <h3 className='text-center fw-bold'>MAKE A POST</h3>
                    <div id='contenido'>
                        <p>Título</p>
                        <input type="text" className='form-control' name='title'/>
                        <p className='mt-4'>Texto</p>
                        <textarea type="text" className='form-control' rows="15" name='postText'/>
                    </div>
                    <div className='labels-container'>
                        <p className='mb-3'>Etiquetas</p>
                        <div className='d-flex flex-wrap labels'>
                            <select>
                                <option value=''>None</option>
                                <option value=''>None</option>
                            </select>
                            <select>
                                <option value=''>None</option>
                            </select>
                            <select>
                                <option value=''>None</option>
                            </select>
                        </div>
                    </div>
                    <div id='enlace' className='d-flex flex-lg-row align-items-lg-center justify-content-between flex-wrap'>
                        <div className='mb-4'>
                            <p className='mt-5'>Adjuntar archivos</p>
                            {/* TO DO - Add an input to insert files */}
                            <input type="file" id="fileInput" name='files[]' multiple/>
                            <img src="/adjuntar.png" id='adjunta' alt="" />
                        </div>
                        <button className='p-2 mt-5'>Publicar</button>
                    </div>
                </form>
            </section>
            <FooterComponent></FooterComponent>
        </>
    )
}