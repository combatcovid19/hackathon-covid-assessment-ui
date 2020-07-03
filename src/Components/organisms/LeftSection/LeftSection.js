import React from "react";

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
class LeftNav extends React.Component {
    render() {
        return (
            <section className="l-content">
                <Link to="/home">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
            </section>
        );
    }
}
const LeftSection = withRouter(LeftNav);
export default LeftSection;