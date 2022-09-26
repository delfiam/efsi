// Error (muestra las excepciones y validaciones)

import React from 'react';

export default function Error(props) {
    return (
       <div className='errordiv'>
        <p id="error">{props.errortext}</p>
       </div>
    )
}