import React from 'react';
import ResultTable from './pages/ResultTable';
import Form from './pages/Form';


function App() {
  return (
    <div>
      <Form class='form' />
      <ResultTable items={null} />
    </div>
  );
}

export default App;
