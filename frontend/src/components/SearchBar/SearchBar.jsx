import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchBar.sass";

export const SearchBarComponent = ({ footer }) => {
  // JS
  const urlSearch = "http://localhost/testFinalProjects/retrieveData/searchPost.php";
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const isFooter = () => {
    return footer === true
      ? "footer-search d-flex align-items-center d-sm-none"
      : "header-search d-none d-sm-flex align-items-center";
  };

  const isFooterImage = () => {
    return footer === true ? "/img/Search.png" : "/lupa.png";
  };

  const searchPosts = () => {
    fetch(`${urlSearch}?title=${title}`, { method: 'GET' })
    .then((response) => {
        response.json();
    })
    .then(data => {
        
    })
  }

  // HTML
  return (
    <div className={isFooter()}>
        <input 
        type="text" 
        className="form-control" 
        placeholder=" Search... " 
        onChange={(e) => setTitle(e.target.value)}
        />
        <img src={isFooterImage()} onClick={searchPosts} alt="search icon" />
    </div>
  );
};
