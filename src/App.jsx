import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";
import { About } from "./pages/About/About";
import { Resume } from "./pages/Resume/Resume";


export const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <About />
            <Resume />
        </div>
    );
};
