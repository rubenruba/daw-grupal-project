import { useState } from 'react';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import './createpost.sass';
export const CreatePostPage = () => {
    const corta = (e) => {
        e.preventDefault();
    }
    //CUANDO LE DES AL BOTON DE PUBLICAR 
    const Publica = async () => {
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
                "cabron","cabrón", "joder", "puta", "pendejo", "coño", "mierda", "maricón", "zorra", "idiota", "malparido",
                "perra", "bastardo", "hijoputa", "mamón", "gilipollas", "chinga", "coger", "desgraciado", "pelotudo",
                "cabronazo", "culero", "chupapijas", "cachonda", "chupar", "pito", "verga", "puñeta", "chingar", "pajero",
                "mierdita", "pendeja", "putazo", "mamahuevo", "mamaverga", "huevón", "pendejada", "pirobo",
                "gilipuertas", "cagón", "estúpido", "imbécil", "cabestro", "pinche", "culebra", "tonto",
                "tarado", "baboso", "putañero", "carajo", "pichula", "pajúa", "cachar", "culear", "reconchetumare",
                "culeado", "putamadre", "papaya", "putero", "jodido", "pichabrava", "mierdecilla", "pelmazo",
                "malnacido", "cachucha", "mariposón", "puñal", "chingón", "reputo", "joputa", "pichicorta",
                "puticlub", "capullo", "trolo", "putarra", "fornicar", "chichi", "pipí", "pimpirrín", "chuminada", 
                "mecos", "pajillero", "marica", "meón", "mojigato", "papafrita", "papelón", "pajarraco", "mojón",
                "merdellón", "manco", "jilipollas", "pendejón", "papanatas", "pajote", "nabazo", "mariposilla", 
                "naco", "mierdón", "pendejazo", "pajuelo", "mona", "papapollas", "pinchurriento", "pantallero", 
                "mariquita", "panoli", "pene", "pelotas", "pelado", "panocha", "mamar", "pelotazo", "pajón", 
                "pajoso", "paquete", "parásito", "patán", "patético", "payaso", "pechofrío", "pedo", "picarón",
                "pijo", "putear", "pichicorta", "putamierda", "putarraca", "putiengue", "putiinferno", "putón", 
                "putrefacto", "puturrú", "puñalada", "puñalazo", "puñalón", "puñetazo", "puñetero", "putazo", "putear", 
                "putero", "puti", "puto", "tupu"
            ];            
            const api = document.getElementById("apitext").value;
            const response = await fetch(url, options);
            //COGER RESPUESTA EN FORMATO JSON
            const result = await response.json();
            console.log(result.result);
            console.log(api)
            let arr=api.split(" ");
            //FOREACH PARA RECORRER TODA LA CADENA DE TEXTO PARA COMPROBAR PALABRAS MALSONANTES
            arr.forEach(element => {
                if(palabrasInapropiadas.includes(element.toLowerCase())){
                    console.log("cortando2")
                }
            });
            //CONDICION POR API PARA COMPROBAR EL RESTOD DE PALABRAS QUE NO ESTA EN EL ARRAY
            if (result.result !== api) {
                let form = document.getElementById("formularioapi");
                console.log("cortando 2")
                //FALTA AQUI CANCELAR ENVIO DE FORMULARIO
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
                            <button id='btn2' className='p-2 mt-5' onClick={Publica}>Publicar</button>
                        </div>
                    </div>
                </form>
            </section>
            <FooterComponent></FooterComponent>
        </>
    )
}
