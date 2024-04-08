import React, { useState } from 'react';
import ResultOption from '../components/ResultOption';

const ResultPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 'foundational',
      img: './assets/images/result.jpg',
      text: 'Build your foundational skill in algebra, geometry and probability.',
      title: 'Foundational Math',
      isPopular: true
    },
    {
      id: 'thinking',
      img: './assets/images/result.jpg',
      text: 'Build your foundational skills in algebra, geometry and probability.',
      title: 'Mathematical Thinking',
      isPopular: false
    }
  ];

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center px-4">
      <h3 className="font-bold text-2xl sm:text-3xl mt-6 text-center">Learning path based on your answers</h3>
      <p className="text-sm sm:text-base mt-4 font-semibold mb-10">Choose one to get started. You can switch anytime.</p>
      <div className="flex flex-col sm:flex-row w-3/5 gap-4 justify-center items-center">
        {options.map(option => (
          <ResultOption
            key={option.id}
            id={option.id}
            img={option.img}
            text={option.text}
            isSelected={selectedOption === option.id}
            onClick={handleOptionClick}
            title={option.title}
            isPopular={option.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
