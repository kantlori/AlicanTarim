import React, { createContext, useState } from "react";
import { cards } from "../fakedata";

export const MyContext = createContext();


export const MyProvider = ({ children }) => {
    const [state, setState] = useState(cards);
    const [originalState] = useState(cards);

    return (
        <MyContext.Provider value={{ state, setState, originalState }}>
            {children}
        </MyContext.Provider>
    );
};
