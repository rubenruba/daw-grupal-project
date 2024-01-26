import { FooterComponent } from '../../components/Footer/footer';
import './createpost.sass';

export const CreatePostPage = () => {
    // JS
        const test = () => document.getElementById('fileInput').click();
    // HTML
    return (
        <>
            {/* TO DO - Make header a component */}
            <header>
                <img src='/logo.png' alt="" id='logo' />
                <div className='d-flex justify-content-between' id='search-container'>
                <input type="text" placeholder=' Search... ' className='form-control me-4' id='cabe'/>
                <img src="/lupa.png" alt="" />
                </div>
                <img src="/circle-user.png" alt="" id='user' />
            </header>
            <section className='create-post-container pt-5 pb-5'>
                <form action="">
                    <h3 className='text-center fw-bold'>MAKE A POST</h3>
                    <div id='contenido'>
                        <p>Título</p>
                        <input type="text" className='form-control' />
                        <p className='mt-4'>Texto</p>
                        <textarea type="text" className='form-control' rows="15" />
                    </div>
                    <div id='enlace'>
                        <div>
                            <p className='mt-5'>Adjuntar archivos</p>
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