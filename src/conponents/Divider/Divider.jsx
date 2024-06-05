import React from 'react';


const Divider = ({ children }) => {
    return (
        <div className="flex flex-row justify-between bg-tommy-background text-center border-y-4 px-72 border-gray-500 p-5">
            {children}
        </div>
    );
    }

export default Divider;