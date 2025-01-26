import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext';

function WorkNavButton({ item }) {
    const { state, setState, originalState } = useContext(MyContext);

    const handleClick = () => {
        if (item === "Show All") {
            setState(originalState);
        } else {
            setState(originalState.filter((element) => element.category === item));
        }
    };

    return (
        <li>
            <button onClick={handleClick}>{item}</button>
        </li>
    )
}

export default WorkNavButton