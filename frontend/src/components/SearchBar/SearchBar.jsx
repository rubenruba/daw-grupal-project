import { useState } from 'react';
import "./SearchBar.sass";
import lens from '../../assets/img/lens.png';
import whiteLens from '../../assets/img/white-lens.png';

export const SearchBarComponent = ({ footer }) => {
  // JS
  const [title, setTitle] = useState('');

  const isFooter = () => {
    return footer === true
      ? "footer-search d-flex align-items-center d-sm-none"
      : "header-search d-none d-sm-flex align-items-center";
  };

  const isFooterImage = () => {
    return footer === true ?whiteLens :lens;
  };

  const searchPosts = () => {
    if(title === ''){
      window.location = `/posts/`;
    } else {
      window.location = `/posts/search/${title}`;
    }
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
