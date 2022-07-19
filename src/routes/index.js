import React, { Component } from "react";
import Defaults from "../defaults";

class Index extends Component {
    state = {};

    componentDidMount() {
        Defaults.setDocumentTitle("Home");
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-4 mb-5">
                    <section className="col-lg-9">
                        <div className="text-end">
                            <h1 className="display-1 mb-4" style={{ fontFamily: "inherit" }}>
                                <span className="text-brand-em-strong">Christopher Digno</span>
                            </h1>
                            <p className="fs-4 mb-0">
                                Hi! I am <span className="text-brand-em">Christopher Digno</span>, also known as my alias,{" "}
                                <span className="text-brand-em">Stackofsugar</span>. I'm a backend-focused software engineer and a second-year
                                computer science student. I'm a self-learner who's eager to keep learning about things I love about computer science.
                            </p>
                        </div>
                    </section>
                    <section className="col d-none d-lg-block">
                        <div className="">
                            <img className="img-cover rounded" alt="Never gonna give you up" src={Defaults.imageAsset("author-image", "jpg")}></img>
                        </div>
                    </section>
                </div>
                <div>
                    <div className="text-center">
                        <div className="display-4 mb-3">
                            <span className="text-brand-em-strong">About this Website</span>
                        </div>
                        <p className="fs-5 mb-0">
                            This is my personal website that will contain my biography, portfolio, and blog where I can express about my opinions on
                            things around me. This website is currently undergoing development, and will be available once everything is completed.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
