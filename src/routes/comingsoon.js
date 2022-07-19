import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Defaults from "../defaults";

class ComingSoon extends Component {
    state = {};

    componentDidMount() {
        Defaults.setDocumentTitle("Coming Soon");
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "18vh" }}>
                <div className="text-center">
                    <h1 className="mb-4">
                        <i className="bi bi-cone"></i>
                        <i className="bi bi-cone"></i>
                        <i className="bi bi-cone"></i>
                    </h1>
                    <div>
                        <h1>We're Sorry!</h1>
                        <h4 className="mb-4">This page will be coming soon</h4>
                        <NavLink className="link-elegant-custom" to={"/"}>
                            Go to Home Page
                        </NavLink>
                    </div>
                    <h1 className="mt-4">
                        <i className="bi bi-cone"></i>
                        <i className="bi bi-cone"></i>
                        <i className="bi bi-cone"></i>
                    </h1>
                </div>
            </div>
        );
    }
}

export default ComingSoon;
