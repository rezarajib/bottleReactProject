import React, { use } from 'react';

const Bottles = ({promiseBottleData }) => {
    const bottles = use(promiseBottleData);
    console.log(bottles);
    return (
        <div>
            <h1>This Is Total Data FOr Bottle ::..{bottles.length}</h1>
        </div>
    );
};

export default Bottles;