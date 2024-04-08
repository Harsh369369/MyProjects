import React from 'react';
import ProgressBar from '../components/ProgressBar';

const ThirdPage = ({ nextPage, prevPage }) => {
  const progress = 30;

  return (
    <div>

      <ProgressBar progress={progress} prevPage={prevPage}></ProgressBar>

      <div className="w-4/5 px-4 flex flex-col sm:flex-row justify-between items-center mx-auto">

        <div className="w-11/12 m-auto sm:w-1/2 flex justify-center items-center sm:mb-8">
          <img className="w-3/4 h-auto" src="./assets/images/right.jpg" alt="right_vector" />
        </div>

        <div className="text-center sm:text-start w-11/12 sm:w-1/2">
          <h3 className="font-bold text-2xl sm:text-3xl mt-6">You're in the right place</h3>
          <p className="text-sm sm:text-base mt-4 font-semibold mb-10">Brilliant gets you hands-on to help improve your professional skills and
            knowledge. You'll interact with concepts and solve fun problems in math, science and computer
            science.</p>
        </div>

      </div>

      <button
        onClick={nextPage}
        className= {`w-1/6 mx-auto mt-1 bg-black text-white text-xs text-center sm:text-xl font-bold px-1 py-1 rounded`}
      >
        Continue
      </button>

    </div>
  );
}

export default ThirdPage;
