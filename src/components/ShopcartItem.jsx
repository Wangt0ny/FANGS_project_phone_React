import './css/shopcartItem.css'

function ShopcartItem(props) {

    let search = props.data;
    let item = props.item;

    return (
        <div className="cart-item">
            <img src={search.img} alt="pic" />
            <div className="cart-info">
                <p className="cart-info-title">{search.product}</p>
                <div className="price">
                    <p>${search.price} x {item} = ${search.price * item}</p>
                </div>
            </div>
            <i className="bi bi-trash"></i>
        </div>
    );
}

export default ShopcartItem;
