import React, { useState } from 'react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import LoadingPage from './pages/LoadingPage';
import ResultPage from './pages/ResultPage';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  
  const renderPage = () => {
    
    switch (currentPage) {
      case 1:
        return <FirstPage className='page' nextPage={nextPage}/>;
      case 2:
        return <SecondPage className='page' nextPage={nextPage} prevPage={prevPage} />;
      case 3:
        return <ThirdPage className='page' nextPage={nextPage} prevPage={prevPage}/>;
      case 4:
        return <FourthPage className='page' nextPage={nextPage} prevPage={prevPage}/>;
      case 5:
        return <FifthPage className='page' nextPage={nextPage} prevPage={prevPage}/>;
      case 6: 
        return <LoadingPage className='page' nextPage={nextPage}/>;
      case 7:
        return <ResultPage className='page' nextPage={nextPage}/>;
      // case 8: 
      //   return <FifthPage/>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;