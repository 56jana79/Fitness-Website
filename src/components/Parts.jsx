import React from 'react';

const Parts = (props) => {
    const itemlist = props.item;
    const elements = itemlist.map((item, index) => 
        <div key={index} className='container1' >{item}</div>
    );

    return (
        <div className='container2'>
            {elements}
        </div>
    );
};

export default Parts;
