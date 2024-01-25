import './createpost.sass';

export const CreatePostPage = () => {
    // JS


    // HTML
    return (
        <>
            <header>
                <img src='/logo.png' alt="" id='logo' />
                <input type="text" placeholder=' Search... ' className='form-control' id='cabe' />
                <img src="/circle-user.png" alt="" id='user' />
            </header>
            <body>
                <form action="">
                    <h3>Make a post</h3>
                    <div id='contenido'>
                        <p>Título</p>
                        <input type="text" className='form-control' id='i1' />
                        <p id='p2'>Texto</p>
                        <input type="text" className='form-control' id='i2' />
                    </div>
                    <div id='enlace'>
                        <div>
                            <p id='padj'>Adjuntar archivos</p>
                            <img src="/adjuntar.png" alt="" id='adjunta' />
                        </div>
                        <div id='enlace2'>
                            <button id='btn1'>Etiquetas
                                <img src="/mas.png" alt="" id='mas' />
                            </button>
                            <button id='btn2'>Publicar</button>
                        </div>
                    </div>

                </form>
            </body>
        </>
    )
}