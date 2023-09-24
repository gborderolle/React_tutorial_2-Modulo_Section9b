import Card from '../components/Card';
import Button from '../components/Button';

export default function Form(props) {

    const submitHandler = (userInput) => {
        userInput.preventDefault(); // Evita enviar el request y el reload del form
        // props.onCalculate(userInputs);
    };

    return (
        <form className={props.class} onSubmit={submitHandler}>
            <div>
                <Card
                    labelText='Username'
                    inputId='username'
                    type='text'
                />
                <Card
                    labelText='Age (years)'
                    inputId='age'
                    type='number'
                />
                <Button
                    type='submit'
                    text='Agregar'
                    class='btn btn-primary'
                />
            </div>
        </form>
    );
}
