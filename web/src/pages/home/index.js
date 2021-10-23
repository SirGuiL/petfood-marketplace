import Header from '../../components/header';
import Petshop from '../../components/petshop';
import Map from '../../components/map';

import './styles.css';

const Home = () => {
  return (
    <div className="h-100">
      <Header hideCart />

      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>
        <ul className="col-12 petshop-list">
          {[1, 2, 3, 4, 5, 6].map((petshop) => (
            <Petshop />
          ))}
        </ul>
      </div>
      <Map />
    </div>
  );
};

export default Home;
