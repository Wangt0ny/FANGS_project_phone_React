import './css/orderpage.css'

function OrderPage(props) {

    let openOrderPage = props.openOrderPage; //Boolean
    let setOrderPage = props.setOrderPage; //fn

    function colseOrderPage() {
        setOrderPage(false);
    }

    return (
        <div className={openOrderPage ? "order-page active" : "order-page"}>
            <i className="bi bi-x-lg" onClick={colseOrderPage}></i>
            <div className="cart">訂單紀錄</div>
            <div className="shopping-cart">
                {/* 自動生成 */}
            </div>

            <div className="order-price-content">
                <div className="order-price-info">訂單金額:<span></span></div>
                <div className="order-price-info">服務費:<span></span></div>
                <div className="order-price-info">總金額:<span></span></div>
            </div>
        </div>
    );
}

export default OrderPage;