import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResources] = useState("posts");

  return (
    <div>
      <div>
        <button onClick={() => setResources("posts")}>Posts</button>
        <button onClick={() => setResources("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
