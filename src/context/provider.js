import React, { createContext, useState } from 'react';

export const Context = createContext()

export default function Provider({ children }) {

    const [mode, setMode] = useState(localStorage.getItem("mode") == "Light" ? true :false)

    return (
        <Context.Provider value={{ mode, setMode }}>
            {children}
        </Context.Provider>
    )

}