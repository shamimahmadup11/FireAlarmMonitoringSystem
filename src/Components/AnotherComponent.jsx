import { useState, useEffect } from 'react';

const AnotherComponent = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thingspeak.com/update?api_key=S7HB7T967YLDN5MO&field1=0', {
          method: 'GET', // Make sure to use the correct HTTP method
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setResponseData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      {responseData && (
        <div>
          <p className="text-lg font-semibold mb-2">Response Data:</p>
          <pre className="bg-gray-200 p-2 rounded-md">{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AnotherComponent;
