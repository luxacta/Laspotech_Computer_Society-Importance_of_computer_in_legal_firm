import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Logo from "./images/logo.png";
import Logo2 from "./images/logo-2.png";
import Hero from "./images/im.jpg";
import FileDownload from "./file.pdf";

import "./index.css";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <div className="container">
            <div className="bg-blue">
                <div className="wrap">
                    <div className="row">
                        <div className="column-half">
                            <div className="logo-section">
                                <img src={Logo} alt="Logo" className="logo" />
                                <img src={Logo2} alt="Logo" className="logo" />
                            </div>
                            <div className="topic">
                                <h1>The Importance of Computer in Legal Firm</h1>
                            </div>
                            <div className="btn">
                                <a href="/">View Slides</a>
                                <a href= {FileDownload} target="_blank" rel="noreferrer">Download PDF</a>
                            </div>
                        </div>
                        <div className="column-half">
                            <img src={Hero} alt="column-img" className="column-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StrictMode>
);
