/** @format */
import { Suspense } from 'react';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Suspense fallback={<div>加载中...</div>}>
        <Switch></Switch>
      </Suspense>
    </div>
  );
}

export default App;
