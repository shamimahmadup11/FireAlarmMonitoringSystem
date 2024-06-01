import { useState, useEffect } from 'react';

const AnotherComponent2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thingspeak.com/channels/2557561/feeds.json?api_key=JDF4WCPVE5FKTHSY&results=2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      {data && (
        <ul className="divide-y divide-gray-300">
          {data.feeds.map((feed, index) => (
            <li key={index} className="py-2">
              <p className="text-lg font-semibold mb-1">Entry {index + 1}:</p>
              <p className="text-gray-600">Created at: {feed.created_at}</p>
              <p className="text-gray-600">Field 1: {feed.field1}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnotherComponent2;
