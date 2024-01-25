import './SearchBar.sass';


export const SearchBarComponent = () => {
    // JS


    // HTML
    //TO DO: ONCLICK DE LA IMAGEN Y FUNCIÓN PARA LA BÚSQUEDA
    return (
        /*<div id="searchBar" className='d-flex flex-row'>
            <input type="text" name="search" id="SearchBar" className='form-control' placeholder='Search...'/>
            <img src="/img/Search.png" alt="search button" onClick=""/>
        </div>*/
        <div id="searchBar" class="d-flex flex-row align-items-center">
            <input type="text" name="search" id="SearchBar" /*class="form-control"*/ placeholder="Search..."/>
            <img src="/img/Search.png" alt="search button" onclick=""/>
        </div>

    )
}