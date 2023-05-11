import React from 'react'

const Button=({onClick, children})=>{
    return(
        <button onClick={onClick} className="font-bold font-serif top-48 bg-indigo-500 h-10 w-24 rounded-lg">
            {children}
        </button>
    );
}

export default Button;