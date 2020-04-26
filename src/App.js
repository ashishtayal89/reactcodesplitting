import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
const ModuleChunk = lazy(() => import("./ModuleChunk"));
const RouteChunk = lazy(() => import("./RouteChunk"));

function App() {
  return (
    <Router>
      <h1>React Chunking</h1>
      <Suspense fallback="loading">
        <div>
          <ModuleChunk />
        </div>
        <div>
          <Route path="/lazy" component={RouteChunk} />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
