import React from 'react';
import ProgressBar from '../components/ProgressBar';

const FifthPage = ({ nextPage, prevPage }) => {
  const progress = 100;

  return (
    <div>

      <ProgressBar progress={progress} prevPage={prevPage}></ProgressBar>

      <div className="w-4/5 px-4 flex flex-col sm:flex-row justify-between items-center mx-auto">

        <div className="w-11/12 mx-auto sm:w-1/2 flex justify-center items-center sm:mb-8">
          <img className="w-3/4 h-auto" src="./assets/images/cheerup.png" alt="cheerup_vector" />
        </div>

        <div className="text-center sm:text-start w-11/12 sm:w-1/2">
          <h3 className="font-bold text-2xl sm:text-3xl mt-1 sm:mt-6">You're on the way!</h3>
          <img className="w-24 sm:w-48 m-auto mt-3" src="./assets/images/stars.png" alt="rating_stars" />
          <i className="text-center sm:text-start font-semibold text-xs sm:text-base">"Through its engaging and
            well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job interviews and real-world
            problem-solving solutions."</i><br />
          <i className="text-start font-semibold text-xs sm:text-base">~Jacob S.</i>
        </div>

      </div>

      <button
        onClick={nextPage}
        className={`w-1/6 mx-auto mt-1 bg-black text-white text-xs text-center sm:text-xl font-bold px-1 py-1 rounded`}
      >
        Continue
      </button>

    </div>
  );
}

export default FifthPage;
