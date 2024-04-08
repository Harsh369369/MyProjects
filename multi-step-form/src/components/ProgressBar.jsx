import React from 'react';

const ProgressBar = ({progress, prevPage}) => {
    console.log(prevPage);
    return (
        <div className='flex justify-center items-center mt-3 mb-3 ms-auto me-auto gap-2'>

            {(prevPage) !== undefined && <img onClick={prevPage} className='h-3 w-auto' src="./assets/images/back.png" alt="back_button" />}

            <div className='w-11/12' style={{backgroundColor: '#f2f2f2'}}>
                <div className='h-1 rounded-sm'
                    style={{
                        width: `${progress}%`,
                        backgroundColor: '#119e7d',
                    }}
                />
            </div>

        </div>
    );
}

export default ProgressBar;

