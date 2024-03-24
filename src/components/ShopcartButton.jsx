import './css/shopcartbutton.css'

function ShopcartButton(props) {

    let btnState = props.btnState; //Boolean

    return (
        <div className={btnState ? "shopcart-button" : "shopcart-button active"}>
            <div className='button-text'>
                目前<span>{ }</span>訂單
                共<span>{ }</span>元
            </div>

        </div>
    );
}

export default ShopcartButton;