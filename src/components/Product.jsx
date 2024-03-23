import './css/product.css'

function Product(props) {
    let { id, img, price, product } = props.data
    return (
        <div className="col-12 col-lg-6">
            <div className="mycard">
                <img className="card-img" src={img} alt="project-pic" />
                <div className="mycard-body">
                    <div className="body-info">
                        <h4 className="card-title">{product}</h4>
                        <p className="card-text">${price}</p>
                    </div>
                    <div className="project-btn-group">
                        <i className="bi bi-dash"></i>
                        <div id={id} className="project-count">0</div>
                        <i className="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;