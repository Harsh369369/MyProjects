import React from 'react';

const ResultOption = ({ id, isSelected, onClick, img, title, text, isPopular }) => {
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {isPopular &&
                <div className='absolute -top-3 left-2/4 -translate-x-2/4 w-fit z-10 bg-yellow-400 rounded-full h-auto px-2 py-1 font-extrabold' style={{
                    fontSize: '10px'
                }}>
                    MOST POPULAR
                </div>
            }
            <div
                id={id}
                className='btn flex justify-center items-center gap-1 bg-white py-4 px-4 cursor-pointer text-start'
                style={{
                    width: '90%',
                    height: 'auto',
                    maxWidth: '300px',
                    boxShadow: isSelected ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' : 'none',
                    border: '1px solid #f2f2f2'
                }}
                onClick={() => onClick(id)}
            >
                <div>
                    <p className='font-extrabold text-xs'>{title}
                        <b className='text-#969999 font-semibold ml-1 text-xs sm:text-sm'>{text}</b></p>
                </div>
                <img src={img} alt={id} className='h-auto w-2/5 sm:h-auto sm:w-2/5' /> {/* Adjust image size */}
            </div>
        </div>
    );
}

export default ResultOption;
