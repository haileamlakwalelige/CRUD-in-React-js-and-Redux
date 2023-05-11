import React from 'react';

const TextField =({label, inputProps, onChange, value})=>{
    return(
        <div className="pt-10 w-full">
            <label className="mb-2 text-base text-gray-800 mr-10">{label}</label>
            <input className="bg-gray-200 py-2 border-2  px-2 outline-none w-[400px]"
            {...inputProps}
            onChange={onChange}
            value={value} />
        </div>
    )
}

export default TextField;