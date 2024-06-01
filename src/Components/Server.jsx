import { useState } from 'react';
import FireAlarmPage from './FireAlarmPage';
import AnotherComponent from './AnotherComponent'; 
import AnotherComponent2 from './AnotherComponent2';

const Server = () => {
  const [selectedData, setSelectedData] = useState(null);

  const toggleData = (index) => {
    setSelectedData(index);
  };

  return (
    <div className="container mx-auto px-4 pt-10 m-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => toggleData(0)}
          className={`h-11 w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-md ${selectedData === 0 ? 'bg-blue-700' : ''}`}
        >
         Read Data
        </button>
        <button
          onClick={() => toggleData(1)}
          className={`h-11 w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-md ${selectedData === 1 ? 'bg-blue-700' : ''}`}
        >
          Read Status
        </button>
        <button
          onClick={() => toggleData(2)}
          className={`h-11 w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-md ${selectedData === 2 ? 'bg-blue-700' : ''}`}
        >
        Create Data
        </button>
      </div>

      {selectedData !== null && (
        <div className="mt-4 bg-gray-200 p-4 rounded-md">
          {selectedData === 0 && <FireAlarmPage />}
          {selectedData === 1 && <AnotherComponent />}
          {selectedData === 2 && <AnotherComponent2 />}
        </div>
      )}
    </div>
  );
};

export default Server;
