import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const [lat, errorMessage] = useLocation();

  const renderContent = () => {
    if (errorMessage) {
      return <div>Error: {errorMessage}</div>;
    } else if (lat) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }

  return <div className="border red">{renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
