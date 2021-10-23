import './styles.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img
        src="https://www.petlove.com.br/images/products/224974/product/Ração_Seca_Pedigree_para_Cães_Adultos_Raças_Pequenas_3104845.jpg?1627721469"
        className="img-fluid align-center"
        alt="produto"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
        <small>
          <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15Kg</b>
        </small>
      </h4>
    </div>
  );
};

export default Product;
