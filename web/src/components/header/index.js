import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';

import './styles.css';

const Header = ({ white, hideCart }) => {
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to="/">
          <img
            src={white ? logoWhite : logo}
            className="img-fluid"
            alt="logo"
          />
        </Link>
      </header>
      {!hideCart && (
        <button
          onClick={() => openDrawer()}
          className="btn btn-secondary cart-button"
        >
          <span className="mdi mdi-cart"></span>2 itens
        </button>
      )}
    </div>
  );
};

export default Header;
