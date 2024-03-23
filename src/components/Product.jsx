import './css/product.css'

function Product(props) {
    let { id, img, price, product } = props.data;
    let shopcart = props.cartData; // array
    let { setShopcart } = props.editCart; // fn

    function increment(id) {
        console.log(id)
    }

    function decrement(id) {
        console.log(id)
    }

    function quantity(id) {
        let search = shopcart.find(x => x.id === id)
        if (search) {
            return search.item
        } else {
            return 0
        }
    }

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
                        <i onClick={() => increment(id)} className="bi bi-dash"></i>
                        <div id={id} className="project-count">{quantity(id)}</div>
                        <i onClick={() => decrement(id)} className="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;