import { useState } from 'react';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import './createpost.sass';

export const CreatePostPage = () => {
    const [apiResponse, setApiResponse] = useState(null);

    const corta = (e) => {
        e.preventDefault();

    }
    // Función para manejar el clic en el botón Publicar
    const handlePublish = async () => {
        // Obtener el texto del textarea
        const text = document.getElementById("apitext").value;
        const url = 'https://community-purgomalum.p.rapidapi.com/json?text=' + encodeURIComponent(text);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b9ab689350msh56a715ebe7e37bap1c9d33jsn3667fa12f01f',
                'X-RapidAPI-Host': 'community-purgomalum.p.rapidapi.com'
            }
        };
        try {
            let palabrasInapropiadas = [
                "cabrón", "joder", "puta", "pendejo", "coño", "mierda", "maricón", "zorra", "idiota", "malparido",
                "perra", "bastardo", "hijoputa", "mamón", "gilipollas", "chinga", "coger", "desgraciado", "pelotudo",
                "cabronazo", "culero", "chupapijas", "cachonda", "chupar", "pito", "verga", "puñeta", "chingar", "pajero",
                "mierdita", "pendeja", "cabrón", "putazo", "mamahuevo", "mamaverga", "huevón", "pendejada", "pirobo",
                "gilipuertas", "cagón", "estúpido", "imbécil", "cabestro", "cabrón", "pinche", "culebra", "tonto",
                "tarado", "baboso", "putañero", "carajo", "pichula", "pajúa", "cachar", "culear", "reconchetumare",
                "culeado", "putamadre", "papaya", "putero", "jodido", "pichabrava", "mierdecilla", "pelmazo",
                "malnacido", "cachucha", "mariposón", "mariposón", "puñal", "carajo", "chingón", "reputo",
                "joputa", "putero", "pichicorta", "reputo", "puticlub", "capullo", "trolo", "putarra", "malparido",
                "fornicar", "chichi", "pipí", "pimpirrín", "chuminada", "mierdecilla", "culero", "mecos", "huevón",
                "pajillero", "joputa", "mariposón", "marica", "pajillero", "meón", "mojigato", "papafrita", "papelón",
                "pajarraco", "mojón", "malparido", "merdellón", "mariconazo", "maricón", "manco", "jilipollas",
                "pendejón", "papanatas", "pajote", "nabazo", "mariposilla", "naco", "mierdón", "jilipollas",
                "pendejazo", "pajuelo", "mona", "papapollas", "papanatas", "mojón", "pinchurriento", "pantallero",
                "papanatas", "jilipollas", "papafrita", "mierdón", "mariquita", "panoli", "mamón", "mamón", "putañero",
                "putero", "pene", "mierda", "puticlub", "pito", "pelotas", "pene", "perro", "pelado", "papanatas",
                "panocha", "mariconazo", "marica", "mamar", "jilipollas", "jilipollas", "pendejazo", "pendejo",
                "pendejada", "pelotazo", "pajón", "pajoso", "pajillero", "pajero", "pajarraco", "pajillero", "paquete",
                "pajarraco", "parásito", "patán", "patético", "payaso", "pechofrío", "pedo", "pendejo", "pene", "picarón",
                "pijo", "pinche", "pipí", "pirobo", "pito", "putero", "puta", "putear", "putero", "pichicorta",
                "putamierda", "putear", "putañero", "puta", "putañero", "putarra", "putarraca", "puticlub", "putidifuso",
                "putiengue", "putiinferno", "puto", "putón", "putrefacto", "putrefacto", "putrefacto", "puturrú",
                "puturrú", "puturrú", "puñal", "puñalada", "puñalazo", "puñalón", "puñetazo", "puñetero", "puñetero",
                "puñetero", "puño", "putazo", "putazo", "putazo", "putear", "putear", "putear", "putero", "puti",
                "puto", "putón", "putón", "putón", "putón", "putrefacto", "putrefacto", "putrefacto", "puturrú"];
            const api = document.getElementById("apitext").value;
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.result);
            console.log(api)
            if (result.result != api || palabrasInapropiadas.includes(api)) {
                let form = document.getElementById("formularioapi");
                console.log("cortando 2")
                form.addEventListener("submit", function (e) {
                    corta(e);
                })
            }
        } catch (error) {
            console.error(error);
        }
    };
    // HTML
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <section className='create-post-container pt-5 pb-5'>
                <form action="" id='formularioapi' onSubmit={(e) => corta(e)}>
                    <h3 className='text-center fw-bold'>MAKE A POST</h3>
                    <div id='contenido'>
                        <p>Título</p>
                        <input type="text" className='form-control' />
                        <p className='mt-4'>Texto</p>
                        <textarea type="text" className='form-control' rows="15" id='apitext'></textarea>
                    </div>
                    <div id='enlace' className='d-flex flex-lg-row align-items-lg-center justify-content-evenly'>
                        <div className='mb-4'>
                            <p className='mt-5' id='parr'>Adjuntar archivos</p>
                            <input type="file" id="fileInput" style={{ 'display': 'none' }}></input>
                            <img src="/adjuntar.png" alt="" className='' id='adjunta' />
                        </div>
                        <div className='d-flex flex-column'>
                            <button id='btn1' className='p-2'>
                                Etiquetas
                                <img src="/mas.png" alt="" id='mas' className='ms-4' />
                            </button>
                            {/* Agregar el controlador de eventos onClick al botón Publicar */}
                            <button id='btn2' className='p-2 mt-5' onClick={handlePublish}>Publicar</button>
                        </div>
                    </div>
                    {/* Mostrar la respuesta de la API si existe */}
                    {apiResponse && (
                        <div>
                            <h4>Respuesta de la API:</h4>
                            <pre>{apiResponse}</pre>
                        </div>
                    )}
                </form>
            </section>
            <FooterComponent></FooterComponent>
        </>
    )
}
