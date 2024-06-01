import { useEffect, useState } from 'react';

const FireAlarmPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thingspeak.com/channels/2557561/feeds.json?api_key=JDF4WCPVE5FKTHSY&results=2');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result.feeds)
        setData(result.feeds);
      } catch (error) {
        console.log("something went wrong ")
      } 
    };

    fetchData();
  }, []);

 

  return (
    <div className="p-4">
    
      {data.map((item, index) => (
        <div key={index} className="mb-2">
          <p>Entry ID: {item.entry_id}</p>
          <p>Field 1: {item.field1}</p>
          <p>Created At: {item.created_at}</p>
        </div>
      ))}
    </div>
  );
};

export default FireAlarmPage;
