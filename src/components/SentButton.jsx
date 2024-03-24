import './css/sentbutton.css'

function SentButton(props) {

    let btnState = props.btnState; //Boolean
    let setShopcart = props.setShopcart; //fn

    function sentShopcart() {
        setShopcart([]);
    }

    return (
        <div className={btnState ? "shopcart-button active" : "shopcart-button"} onClick={sentShopcart}>
            <div className='button-text'>
                送出<span>{ }</span>訂單
            </div>
        </div>
    );
}

export default SentButton;