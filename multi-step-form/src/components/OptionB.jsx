import React from 'react';

const OptionB = ({ id, isSelected, onClick, img, title, text }) => {
    return (
        <div
            id={id}
            className='btn flex flex-col justify-center items-center w-1/3 h-1/3 sm:w-1/4 sm:h-1/4 bg-white gap-1 p-2 rounded cursor-pointer'
            style={{
                boxShadow: isSelected ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' : 'none',
                border: isSelected ? '1px solid #e3c384' : '1px solid #f2f2f2'

            }}
            onClick={() => onClick(id)}
        >

            <img src={img} alt="id" style={{ height: '40%', width: '90%' }} />
            <p className='font-semibold' style={{ fontWeight: '600', fontSize: '1vw' }}>{title}</p>
            <p className='font-medium text-gray-400' style={{ fontSize: '1.2vw'}}>{text}</p>
            
        </div>
    );
}

export default OptionB;

