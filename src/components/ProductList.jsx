import Product from "./Product";
import SentButton from "./SentButton";
import Shopcart from "./Shopcart";
import ShopcartButton from "./ShopcartButton";

function ProductList() {
    return (
        <>
            <div>ProductList</div>
            <Product />
            <Shopcart />
            <ShopcartButton />
            <SentButton />
        </>

    );
}

export default ProductList;