import React from 'react';
import DefaultHeaderComponents from "./DefaultHeaderComponents";
function Layout({ children }) {
    return (
        <div className="App">
            <DefaultHeaderComponents />
            <main> {children} </main>
        </div>
    );
}

export default Layout;
