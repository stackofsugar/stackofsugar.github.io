import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Index from "./routes";
import NotFound from "./routes/404";
import ComingSoon from "./routes/comingsoon";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Index />} />
                    <Route path="about" element={<ComingSoon />} />
                    <Route path="portfolio" element={<ComingSoon />} />
                    <Route path="blog" element={<ComingSoon />} />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
