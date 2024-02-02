import { useEffect, useState } from 'react';
import { FooterComponent } from '../../components/Footer/footer';
import { HeaderComponent } from '../../components/Header/header';
import './createpost.sass';

export const CreatePostPage = () => {
    // JS
    // const url = 'url to aws';
    const urlPost = 'http://localhost/testFinalProjects/insertData/insertPost.php';
    const urlLabel = 'http://localhost/testFinalProjects/retrieveData/getAllLabels.php';
    const [labels, setLabels] = useState([]);
    const [labelsCopy, setLabelsCopy] = useState([]);
    const [selected, setSelected] = useState([]);
    
    
    useEffect(() => {
        fetch(urlLabel)
        .then((response) => {
            if(!response.ok){
                throw new Error('Error al obtener etiquetas');
            } else {
                return response.json();
            }
        })
        .then((data) => {
            setLabels(data);
            setLabelsCopy(data);
        })
        .catch((error) => {
            console.log('ERROR', error);
        })
    }, []);

    // const checkSelected = () => {
    //     const arr = Array.from(labels.map(lab => {return lab.LabelId.toString()}))

    //     // selected.forEach(labelId => {
    //     //     if(arr.includes(labelId)){
    //     //         console.log('INCLUYE')
    //     //         setLabelsCopy(labelsCopy.filter((lab) => lab.LabelId.toString() !== labelId))
    //     //     }
    //     // });

    //     const newArr = [];
    //     labels.forEach((lab) => {
    //         if(!selected.includes(lab.LabelId.toString())){
    //             newArr.push(lab);
    //             console.log('NO INCLUYE')
    //         }
    //     })

    //     setLabelsCopy(newArr);
    // }

    // const selectLabel = (labelId, pos) => {
    //     checkSelected();
    //     setSelected([selected[pos] = labelId, ...selected])
    //     console.log(selected)
    // }

    // HTML
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <section className='create-post-container pt-5 pb-5'>
                <form action={urlPost} method='post' enctype="multipart/form-data">
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
                            {/* <select onChange={(e) => selectLabel(e.target.value, 0)}> */}
                            <select name='label1'>
                                <option value=''>None</option>
                                {labelsCopy.map(label => {
                                    return <option value={label.LabelId}>{label.Name}</option>
                                })}
                            </select>
                            <select name='label2'>
                                <option value=''>None</option>
                                {labelsCopy.map(label => {
                                    return <option value={label.LabelId}>{label.Name}</option>
                                })}
                            </select>
                            <select name='label3'>
                                <option value=''>None</option>
                                {labelsCopy.map(label => {
                                    return <option value={label.LabelId}>{label.Name}</option>
                                })}
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