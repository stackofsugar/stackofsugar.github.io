import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Defaults from "../defaults";

class Maintenance extends Component {
    state = {};

    componentDidMount() {
        Defaults.setDocumentTitle("Under Construction");
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
                        <h4 className="mb-4">This page is under maintenance</h4>
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

export default Maintenance;
