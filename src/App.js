import { useState } from 'react';
import React from 'react';
import ResultTable from './components/pages/ResultTable';
import Form from './components/pages/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [userList, setUserList] = useState([]); // lista inicializa con []

  const addUserHandler = (userInput) => {
    setUserList((prevInputs) => {
      return [...prevInputs, userInput]; // agrega el user a la lista
    });
  };

  return (
    <div className='container m-3'>
      <Form addUserHandler={addUserHandler} />
      <br />
      <ResultTable class='table' userList={userList} />
    </div>
  );
}

export default App;
