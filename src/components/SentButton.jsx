import './css/sentbutton.css'

function SentButton(props) {

    let btnState = props.btnState; //Boolean

    return (
        <div className={btnState ? "shopcart-button active" : "shopcart-button"}>
            <div className='button-text'>
                送出<span>{ }</span>訂單
            </div>
        </div>
    );
}

export default SentButton;