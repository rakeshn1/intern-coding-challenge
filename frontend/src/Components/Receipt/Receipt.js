import React, { useRef } from "react";
import "./Receipt.css";
import * as AiIcons from "react-icons/ai";

function Receipt(props) {
    const modalRef = useRef();
    const ticket = props.order

    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.setOptions();
        }
    };

    const closeModalOnX = () => {
        props.setOptions();
    };

    return (
        <div className="RBasket" onClick={closeModal} ref={modalRef}>
            <div className="RBasket__wrapper">
                <div className="RBasket__block">
                    <div className="closeIcon" onClick={closeModalOnX}>
                        <AiIcons.AiOutlineClose />
                    </div>
                    <div className="RBasket__header">
                        <h4 className="Mbasket__order-amount">Ticket Description</h4>
                    </div>
                    <div className="RBasket__main"> {"Description :"} <div className="Basket__main"> {ticket.description}</div></div>

                    <br/>
                    <div className="RBasket__main"> {"Priority :"} {ticket.priority}</div>
                    <br/>
                    <div className="RBasket__main"> {"Status :"}{ticket.status}</div>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Receipt;
