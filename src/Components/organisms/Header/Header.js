import React from "react";
import logo from '../../../HCL.png'
class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="offset-md-1 float-left">
                    ACT COVID-19
                </h1>
                <img className="float-right" src={logo}/>
            </header>
        )
    }
}
export default Header;