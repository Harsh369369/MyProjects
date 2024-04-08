import React, { useState } from 'react';
import OptionsA from '../components/OptionA';
import ProgressBar from '../components/ProgressBar';

const FirstPage = ({ nextPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const progress = 10;

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  const handleContinueClick = () => {
    nextPage();
  };


  const options = [
    { id: 'student', img: './assets/images/student.png', btext: 'Student', stext: 'or soon to be enrolled' },
    { id: 'professional', img: './assets/images/prfessional.png', btext: 'Professional', stext: 'pursuing a career' },
    { id: 'parent', img: './assets/images/parent.png', btext: 'Parent', stext: 'of a school-age child' },
    { id: 'learner', img: './assets/images/student.png', btext: 'Lifelong learner' },
    { id: 'teacher', img: './assets/images/teachers.png', btext: 'Teacher' },
    { id: 'other', img: './assets/images/others.png', btext: 'Other' }
  ];

  return (
    <div>
      <ProgressBar progress={progress}></ProgressBar>

      <div className="max-w-3xl mx-auto px-4">
        <h3 className="font-bold text-2xl sm:text-3xl mt-6">Which describes you best?</h3>
        <p className="text-sm sm:text-base mt-4 font-semibold mb-10">This will help us personalize your experience.</p>
        {options.map(option => (
          <OptionsA
            key={option.id}
            id={option.id}
            img={option.img}
            btext={option.btext}
            stext={option.stext}
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

export default FirstPage;
