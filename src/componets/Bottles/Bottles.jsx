import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottes.css'

const Bottles = ({promiseBottleData }) => {
    const bottles = use(promiseBottleData);
    console.log(bottles);
    return (
        <div>
            <h1>This Is Total Data FOr Bottle ::..{bottles.length}</h1>

            {
                <div className='bottles-container'>
                    {
                        bottles.map(bottle  => <Bottle bottle={bottle}></Bottle>)
                    }
                </div>
            }
        </div>
    );
};

export default Bottles;