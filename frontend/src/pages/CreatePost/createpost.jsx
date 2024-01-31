import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import { Header2Component } from '../../components/Header2/header2';
import './createpost.sass';

export const CreatePostPage = () => {
    // JS
        const test = () => document.getElementById('fileInput').click();
    // HTML
    return (
        <>
            {/* TO DO - Make header a component */}
            <Header2Component></Header2Component>
            <section className='create-post-container pt-5 pb-5'>
                <form action="">
                    <h3 className='text-center fw-bold'>MAKE A POST</h3>
                    <div id='contenido'>
                        <p>Título</p>
                        <input type="text" className='form-control' />
                        <p className='mt-4'>Texto</p>
                        <textarea type="text" className='form-control' rows="15" />
                    </div>
                    <div id='enlace' className='d-flex flex-lg-row align-items-lg-center justify-content-evenly'>
                        <div className='mb-4'>
                            <p className='mt-5' id='parr'>Adjuntar archivos</p>
                            {/* TO DO - Add an input to insert files */}
                            <input type="file" id="fileInput" style={{ 'display': 'none' }}></input>
                            <img src="/adjuntar.png" alt="" className='' id='adjunta' onClick={test}/>
                        </div>
                        <div className='d-flex flex-column'>
                            <button id='btn1' className='p-2'>
                                Etiquetas
                                <img src="/mas.png" alt="" id='mas' className='ms-4' />
                            </button>
                            <button id='btn2' className='p-2 mt-5'>Publicar</button>
                        </div>
                    </div>
                </form>
            </section>
            <FooterComponent></FooterComponent>
        </>
    )
}