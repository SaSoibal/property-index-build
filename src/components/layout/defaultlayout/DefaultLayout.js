import React from 'react';
import DefaultHeaderComponents from "./DefaultHeaderComponents";
import DefaultFooterComponent from "./DefaultFooterComponent";
import { motion } from "framer-motion";
import {useLocation} from "react-router-dom";
const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};
const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5
};
function Layout({ children }) {
    const { pathname } = useLocation();
    return (
        <div className="App">
            <DefaultHeaderComponents />
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <main> {children} </main>
            </motion.div>
            <DefaultFooterComponent />
        </div>
    );
}

export default Layout;
