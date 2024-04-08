import React, { useState } from 'react';
import OptionsA from '../components/OptionA';
import ProgressBar from '../components/ProgressBar';

const SecondPage = ({ nextPage, prevPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const progress = 20;

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  const handleContinueClick = () => {
    nextPage();
  };


  const options = [
    { id: 'learning', img: './assets/images/student.png', btext: 'Learning specific skills to advance my career' },
    { id: 'exploring', img: './assets/images/exploring.jpg', btext: 'Exploring new topics I\'m interested in' },
    { id: 'refreshing', img: './assets/images/student.png', btext: 'Refreshing my math foundation' },
    { id: 'exercising', img: './assets/images/target.jpg', btext: 'Exercising my brain to stay sharp' },
    { id: 'else', img: './assets/images/student.png', btext: 'Something else' }
  ];

  return (
    <div>
      <ProgressBar progress={progress} prevPage={prevPage}></ProgressBar>

      <div className="max-w-3xl mx-auto px-4">
        <h3 className="font-bold text-2xl sm:text-3xl mt-6">Which are you most interested in?</h3>
        <p className="text-sm sm:text-base mt-4 font-semibold mb-10">Choose just one. This will help us get you started (but won't limit your experience).</p>
        {options.map(option => (
          <OptionsA
            key={option.id}
            id={option.id}
            img={option.img}
            btext={option.btext}
            isSelected={selectedOption === option.id}
            onClick={handleOptionClick}
          />
        ))}
      </div>

      <button
        onClick={handleContinueClick}
        disabled={!selectedOption}
        className= {`w-1/6 mx-auto mt-1 bg-${selectedOption ? 'black' : 'lightgrey'} text-white text-xs text-center sm:text-xl font-bold px-1 py-1 rounded mt-6`}
        >
        Continue
      </button>

    </div>
  );
}

export default SecondPage;
