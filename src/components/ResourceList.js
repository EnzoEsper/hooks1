import React, { useEffect, useState } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResource] = useState([]);

  // const fetchResource = async resource => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${resource}`
  //   );

  //   setResource(response.data);
  // };

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResource(response.data);
    })(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}> {record.title} </li>
      ))}
    </ul>
  );
};

export default ResourceList;
