import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="Header">
            <div className="Header__wrapper">
                <div className="Header__logo-wrapper">
                    <h1> Zendesk Ticket viewer</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;
