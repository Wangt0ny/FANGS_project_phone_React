import ShopcartItem from "./ShopcartItem";
import './css/shopcart.css'

function Shopcart(props) {

    let openCart = props.openCart; // Boolean
    let setOpenCart = props.setOpenCart; //fn
    let productDataList = props.data; //array
    let shopcart = props.shopcart; //array
    let setShopcart = props.editShopcart; //fn

    function shopcartItem() {
        if (shopcart.length !== 0) {
            return shopcart.map((x) => {
                let { id, item } = x;

                let search = productDataList.find((y) => y.id === id) || [];

                return <ShopcartItem key={id}
                    item={item}
                    data={search}
                    id={id}
                    setShopcart={setShopcart}
                    shopcart={shopcart} />

            })
        } else {
            return <div className="no-item"><h4>購物車是空的唷</h4></div>;
        }
    }

    function closeShopcart() {
        setOpenCart(false)
    }

    return (
        <div className={openCart ? "cart-page active" : "cart-page"}>
            <i className="bi bi-x-lg" onClick={closeShopcart}></i>
            <div className="cart">購物車</div>
            <div className="shopping-cart">
                {shopcartItem()}
            </div>
        </div>
    );
}

export default Shopcart;