import React, { useState } from 'react';
import OptionB from '../components/OptionB';
import ProgressBar from '../components/ProgressBar';

const FourthPage = ({ nextPage, prevPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const progress = 50;

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  const handleContinueClick = () => {
    nextPage();
  };

  const options = [
    { id: 'introductory', img: './assets/images/introductory.jpeg', title: 'Arithmetic', text: 'Introductory' },
    { id: 'foundational', img: './assets/images/foundational.jpeg', title: 'Basic Algebra', text: 'Foundational' },
    { id: 'intermediate', img: './assets/images/intermediate.jpeg', title: 'Intermediate Algebra', text: 'Intermediate' },
    { id: 'advance', img: './assets/images/advanced.jpeg', title: 'Calculus', text: 'Advanced' }
  ];


  return (
    <div>
      <ProgressBar progress={progress} prevPage={prevPage} />

      <div className="max-w-3xl mx-auto px-4">
        <h3 className="font-bold text-2xl sm:text-3xl mt-6">Which is your math comfort level?</h3>
        <p className="text-sm sm:text-base mt-4 font-semibold sm:mb-10">Choose the highest level you feel confident in - you can always adjust later.</p>

        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 justify-center items-center py-2 sm:py-10 '>
          {options.map(option => (
            <OptionB
              key={option.id}
              id={option.id}
              img={option.img}
              title={option.title}
              text={option.text}
              isSelected={selectedOption === option.id}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleContinueClick}
        disabled={!selectedOption}
        className= {`w-1/6 mx-auto sm:mt-1 bg-${selectedOption ? 'black' : 'lightgrey'} text-white text-xs text-center sm:text-xl font-bold px-1 py-1 rounded mt-2 sm:mt-6`}
      >
        Continue
      </button>
    </div>
  );
}

export default FourthPage;
