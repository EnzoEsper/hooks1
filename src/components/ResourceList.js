import React, { useEffect, useState } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResource] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResource(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}> {record.title} </li>
      ))}
    </ul>
  );
};

export default ResourceList;
