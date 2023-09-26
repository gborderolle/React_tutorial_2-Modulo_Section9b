import { useRef, useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ShowMessage from '../UI/messages/ShowMessage';
import ShowErrors from '../UI/messages/ShowErrors';
import { ErrorModal } from '../UI/messages/ErrorModal';

export default function Form(props) {
  // Refs:
  // Clase 139: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25598566#search
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  // const [errors, setErrors] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault(); // Evita enviar el request y el reload del form

    const username = usernameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (
      username.trim().length === 0 ||
      age.length === 0
    ) {
      setError({
        title: 'Dato inválido',
        message: 'Por favor, ingrese un valor válido',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Dato inválido',
        message: 'Por favor, ingrese un valor válido',
      });
      return;
    }

    props.addUserHandler({ username, age });

    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
            reference={usernameInputRef}
          />
          <Card
            labelText='Edad'
            inputId='age'
            inputType='number'
            reference={ageInputRef}
          />
          <Button type='submit' text='Agregar' class='btn btn-primary' />
        </div>
      </form>
    </>
  );
}
