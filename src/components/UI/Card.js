export default function Card(props) {
  return (
    <p>
      <label htmlFor={props.inputId} className='form-label'>
        {props.labelText}
      </label>
      <input
        type={props.inputType}
        id={props.inputId}
        onChange={props.onChange}
        value={props.value}
        className='form-control'
        ref={props.reference}
      />
    </p>
  );
}
