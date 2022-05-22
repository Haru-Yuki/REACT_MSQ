import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.scss";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import {Provider} from "react-redux";
import store from "../../store/store";

const Index = () => {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Main />
                <Footer />
            </Provider>
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<Index />);
