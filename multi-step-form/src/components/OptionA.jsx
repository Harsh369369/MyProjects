import React from 'react';

const OptionsA = ({ id, img, btext, stext, isSelected, onClick }) => {
    if (btext === undefined) {
        btext = '';
    }
    if (stext === undefined) {
        stext = '';
    }

    return (
        <div 
            id={id}
            className='btn flex items-center w-3/5 h-12 mx-auto my-3 gap-3 pl-4 rounded-md border-2 border-gray-100 cursor-pointer' 
            style={{
                 boxShadow: isSelected ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' : 'none',
            }} 
            onClick={() => onClick(id)}
        >
            <img src={img} alt={id} className='h-8 w-8'/>
            <p className='text-black text-xs sm:text-base'><b className='font-semibold'>{btext}</b>{' ' + stext}</p>
        </div>
    );
}

export default OptionsA;
