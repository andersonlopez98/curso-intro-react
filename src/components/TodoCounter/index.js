import React, {useContext} from 'react';
import { TodoContext } from "../../TodoContext/index";

import './TodoCounter.css'

const TodoCounter = () => {
    const { total, completed } =  useContext(TodoContext)

    return (
        <h2 className="TodoCounter" >Has Completado {completed} de {total} TODOs</h2>
    );
}

export { TodoCounter };
