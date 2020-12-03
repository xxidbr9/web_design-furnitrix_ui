import React from "react";

const Devider = ({ className, ...props }) => {
    const classString = !!className
        ? `block w-full border-t-2 ${className}`
        : `block w-full border-t-2 border-gray-300`;

    return <span className={classString} {...props}></span>;
};

export default Devider;
