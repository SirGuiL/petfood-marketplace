import './styles.css';

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://www.petlove.com.br/images/products/224974/product/Ração_Seca_Pedigree_para_Cães_Adultos_Raças_Pequenas_3104845.jpg?1627721469"
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary"> R$ 260,00</label>
          </h6>
          <small>
            <b>Ração para Cães Adultos Carne e Vegetais Pedigree</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
