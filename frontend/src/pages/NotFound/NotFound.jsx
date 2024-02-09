import "./NotFound.sass";

export const NotFoundPage = () => {
    // JS

    // HTML
    return (
        <div className="found-container">
            <h1 id="title">4<span><img src="/ghost-solid.svg" alt="" id="ghost" /></span>4</h1>
            <div className="mt-5">
                <h2 id="title2">Error: 404 page not found</h2>
                <p id="context">Sorry, the page you're looking for cannot be accessed</p>
            </div>
            <a href="/landing">Comeback to the Landing</a>
        </div>
    );
};