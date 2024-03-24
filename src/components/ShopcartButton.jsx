import './css/shopcartbutton.css'

function ShopcartButton(props) {

    let btnState = props.btnState; //Boolean
    let setOpenCart = props.setOpenCart; //Boolean
    let setBtnState = props.setBtnState; //fn

    function openShopcart() {
        setOpenCart(true);
        setBtnState(true);
    }

    return (
        <div className={btnState ? "shopcart-button" : "shopcart-button active"} onClick={openShopcart}>
            <div className='button-text'>
                目前<span>{ }</span>訂單
                共<span>{ }</span>元
            </div>

        </div>
    );
}

export default ShopcartButton;