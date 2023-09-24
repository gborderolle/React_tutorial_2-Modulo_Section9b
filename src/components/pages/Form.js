import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ShowMessage from '../UI/messages/ShowMessage';
import ShowErrors from '../UI/messages/ShowErrors';
import { ErrorModal } from '../UI/messages/ErrorModal';

export default function Form(props) {
  // const [errors, setErrors] = useState([]);
  const [error, setError] = useState();
  const initialUserInput = {
    username: '',
    age: 0,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault(); // Evita enviar el request y el reload del form

    if (
      userInput['username'].trim().length === 0 ||
      userInput['age'].length === 0
    ) {
      setError({
        title: 'Dato inválido',
        message: 'Por favor, ingrese un valor válido',
      });
      return;
    }
    if (+userInput['age'] < 1) {
      setError({
        title: 'Dato inválido',
        message: 'Por favor, ingrese un valor válido',
      });
      return;
    }

    props.addUserHandler(userInput);
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInputs) => {
      return {
        ...prevInputs,
        [input]: value, // guarda el value en el ítem "input"
      };
    });
  };

  const errorHandler = () => {
    alert();
    setError(null);
  };

  return (
    <>
      {/* <ShowMessage /> */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div>
          <Card
            labelText='Nombre'
            inputId='username'
            inputType='text'
            onChange={(evt) => inputChangeHandler('username', evt.target.value)}
            value={userInput['username']}
          />
          <Card
            labelText='Edad'
            inputId='age'
            inputType='number'
            onChange={(evt) => inputChangeHandler('age', evt.target.value)}
            value={userInput['age']}
          />
          <Button type='submit' text='Agregar' class='btn btn-primary' />
        </div>
      </form>
    </>
  );
}
