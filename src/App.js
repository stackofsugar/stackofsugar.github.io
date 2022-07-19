import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

class App extends Component {
    navItems = [
        { route: "/", name: "Home" },
        { route: "/about", name: "About Me" },
        { route: "/portfolio", name: "Portfolio" },
        { route: "/blog", name: "Blog" },
    ];

    render() {
        return (
            <>
                <header className="sticky-top mb-4">
                    <nav className="navbar navbar-custom navbar-expand-md navbar-dark">
                        <div className="container-fluid nav-container-custom">
                            <NavLink className={"navbar-brand navbar-brand-custom"} to={"/"}>
                                Stackofsugar
                                <span className="brand-dot">.</span>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    {this.navItems.map((navItem) => (
                                        <li className="nav-item nav-item-custom" key={navItem.name}>
                                            <NavLink className={"nav-link color-sweep-navitem"} to={navItem.route}>
                                                {navItem.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <main>
                    <Outlet />
                </main>

                <footer>
                    <div className="text-center mt-4 footer-custom py-1">
                        <div>
                            Made with ❤️ by{" "}
                            <a href="https://github.com/stackofsugar" className="link-light">
                                Stackofsugar
                            </a>
                        </div>
                        <div className="text-muted">Some Rights Reserved</div>
                    </div>
                </footer>
            </>
        );
    }
}

export default App;
