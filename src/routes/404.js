import React, { Component } from "react";
import Defaults from "../defaults";

class NotFound extends Component {
    state = {};

    componentDidMount() {
        Defaults.setDocumentTitle("Route Not Found");
    }

    render() {
        return (
            <div className="container">
                <div className="text-center" style={{ marginTop: "18vh" }}>
                    <h1>Route Not Found :(</h1>
                </div>
            </div>
        );
    }
}

export default NotFound;
